import mongoose from "mongoose"

 export const connectDB = async () => {

     await mongoose.connect('mongodb+srv://alijmi0009:89898989@cluster0.6sgbo.mongodb.net/food-del').then (()=>console.log("DB Connected"));
}


 