<<<<<<< HEAD
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect( process.env.MY_MONGOBD_SECRET)
    .then(() => console.log("DB Connected"));
};
=======
import mongoose from "mongoose"

 export const connectDB = async () => {

     await mongoose.connect('mongodb+srv://alijmi0009:89898989@cluster0.6sgbo.mongodb.net/food-del').then (()=>console.log("DB Connected"));
}


 
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
