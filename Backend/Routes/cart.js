import express from "express";
import { AddToCartSchema } from "../Controller/Cart/cartSchema.js";
import validateMiddle from "../Middleware/Validation.js";
import {
  addToCart,
  getAllCartItems,
  removeCartProduct,
  updateCartQty,
} from "../Controller/Cart/Cart.js";
import { userVerification } from "../Middleware/Auth.js";

const cartRouter = express.Router();

cartRouter
  .route("/")
  .get(userVerification, getAllCartItems)
  .post(userVerification, addToCart);

cartRouter
  .route("/:id")
  .patch(userVerification, updateCartQty)
  .delete(userVerification, removeCartProduct);
export default cartRouter;
