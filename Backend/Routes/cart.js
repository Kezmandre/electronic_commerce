import express from "express";
import { AddToCartSchema } from "../Controller/Cart/cartSchema.js";
import validateMiddle from "../Middleware/Validation.js";
import { addToCart, getAllCartItems, removeCartProduct, updateCartQty } from "../Controller/Cart/Cart.js";
import { userVerification } from "../Middleware/Auth.js";

const cartRouter = express.Router();

cartRouter
  .route("/")
  .post(validateMiddle(AddToCartSchema), userVerification, addToCart)
  .get(userVerification, getAllCartItems);

  cartRouter.route("/:id").patch(userVerification,updateCartQty).delete(userVerification,removeCartProduct)
export default cartRouter;
