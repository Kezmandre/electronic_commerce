import express from "express";
import validateMiddle from "../Middleware/Validation.js";
import { orderSchema } from "../Controller/Order/OrderSchema.js";
import {
  CreateOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../Controller/Order/Order.js";
import { Authorized, userVerification } from "../Middleware/Auth.js";

const orderRouter = express.Router();

orderRouter
  .route("/")
  .post(validateMiddle(orderSchema), userVerification, CreateOrder)
  .get(getOrders);
orderRouter
  .route("/:id")
  .get(userVerification, getOrder)
  .patch(userVerification, Authorized(["admin"]), updateOrder)
  .delete(userVerification, Authorized(["admin","default"]), deleteOrder);
export default orderRouter;
