import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String,enum:["admin","default"],default:"default"},
    userCode:{type:String, required:true,unique:true}
},
    {timestamps:true}
)

const userModel = mongoose.model("user",userSchema)

export default userModel