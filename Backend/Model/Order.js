import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId}, // User ID
    products: [{ productId: {type:mongoose.Schema.ObjectId}, required:true }],
    quantity:{type: Number, required:true}, // Array of Item IDs
    totalPrice:{type:Number, required:true},
    orderDate:{type:Date,default:Date.now}

},
    {timestamp:true}
)


const orderModel = mongoose.model("order",orderSchema)

export default orderModel