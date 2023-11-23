import mongoose from "mongoose";

// const cartItemSchema = mongoose.Schema({
//   product: { type: mongoose.Schema.ObjectId, required: true },
//   quantity: { type: Number, required: true, default: 1 },
// });

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, required: true },
  product: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: { type: Number, required: true, default: 1 },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
