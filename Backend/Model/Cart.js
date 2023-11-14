import mongoose from "mongoose";

// const cartItemSchema = mongoose.Schema({
//   product: { type: mongoose.Schema.ObjectId, required: true },
//   quantity: { type: Number, required: true, default: 1 },
// });

const cartSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, required: true },
  items: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;
