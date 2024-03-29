import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import httpStatus from "http-status";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import { config } from "../Backend/Config/Config.js";
import { dbConnect } from "./Config/db.js";
import path from "path";

import userRouter from "./Routes/User.js";
import productRouter from "./Routes/Product.js";
import cartRouter from "./Routes/cart.js";
import orderRouter from "./Routes/order.js";
import favoriteRoute from "./Routes/favorite.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/users", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/favorite", favoriteRoute);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.status(httpStatus.OK).json({
      status: "success",
      payload: "Welcome! to Exclusive E-commerce App",
    });
  });
}

app.all("*", (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: "error",
    payload: "No defined endpoint",
  });
});

dbConnect()
  .then((result) => {
    console.log(`connected to Database`.bgGreen);

    const port = config.env === "production" ? process.env.PORT : 5000;
    app.listen(port, (err) => {
      if (err) {
        console.log(`error:${err}`.bgRed);
        return;
      }
      console.log(
        `app is running on port:${port} in ${config.env} mode`.bgGreen
      );
    });
  })

  .catch((err) => console.log(`db error:${err}`.bgRed));
