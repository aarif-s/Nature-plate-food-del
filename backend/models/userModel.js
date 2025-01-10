import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String ,required:true},
    email:{type:String ,required:true , unique:true},
    password :{type:String ,required:true},
    cartData :{type:Object ,default:{}}
},{minimize:false})

const userModel = mongoose.model.user  || mongoose.model("user", userSchema);

<<<<<<< HEAD
export default userModel;
=======
export default userModel;
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
