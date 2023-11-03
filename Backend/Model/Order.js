import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId}, // User ID
    items: [{ productId: {type:mongoose.Schema.ObjectId}, qty }], // Array of Item IDs

},
    {timestamp:true}
)


const orderModel = mongoose.model("order",orderSchema)

export default orderModel