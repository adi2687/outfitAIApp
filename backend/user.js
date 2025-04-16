import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profileImageURL:{type:String , default:'./profileImage/default.png'},
},{timestamps:true})

const User=mongoose.model('User',userSchema)

export default User