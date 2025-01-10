import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect( process.env.MY_MONGOBD_SECRET)
    .then(() => console.log("DB Connected"));
};
