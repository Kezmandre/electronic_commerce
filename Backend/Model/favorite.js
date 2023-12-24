import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: { type: Number, required: true, default: 1 },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
