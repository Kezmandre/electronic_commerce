import mongoose from "mongoose";

export const productSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    discountPrice:{type:Number},
    imageUrl:{type:String,required:true},
    
},
    {timestamps:true}
)


const productModel = mongoose.model("product",productSchema)

export default productModel