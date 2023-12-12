import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, required: true, ref: "User" },
  product: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: { type: Number, required: true, default: 1 },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
