import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.ObjectId }, // User ID
    address:{
      type:String,required:true
    },
    phoneNumber:{
      type:Number,required: true
    },
    orderStatus:{type:String, enum:["processing","dispatch","delivered"],default:"processing"},
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
    totalPrice: { type: Number, required: true, default: 0 },
    orderDate: { type: Date, default: Date.now },
  },
  { timestamp: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
