import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    discountPrice:{type:Number,required:false},
    productId:{type:Number,required:true},
    picture:{type:String,required:true},

},
    {timestamp:true}
)


const productModel = mongoose.model("product",productSchema)

export default productModel