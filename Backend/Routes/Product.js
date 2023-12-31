import express from "express";
import validateMiddle from "../Middleware/Validation.js";
import { Authorized, userVerification } from "../Middleware/Auth.js";
import { productValSchema } from "../Controller/Products/productSchema.js";
import {
  allProducts,
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../Controller/Products/product.js";

const productRouter = express.Router();

productRouter
  .route("/")
  .post(
    validateMiddle(productValSchema),
    userVerification,
    Authorized(["admin"]),
    createProduct
  )
  .get(allProducts);

productRouter
  .route("/:id")
  .get(getProduct)
  .patch(userVerification, Authorized(["admin"]), updateProduct)
  .delete(userVerification, Authorized(["admin"]), deleteProduct);

export default productRouter;
