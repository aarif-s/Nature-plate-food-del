import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



 // app config
 const app = express()
 const port = 4000

 // middleware
 app.use(express.json())
 app.use(cors())

 //DB Connection 
 connectDB();

 //api endpoints
 app.use("/api/food",foodRouter)
 app.use("/images" ,express.static('uploads'))

 app.get("/",(req,res)=>{
      res.send("API working")
 })

 app.listen(port,()=>{
    console.log(`Server stsrted on http://localhost:${port}`)
 })


 // mongodb+srv://alijmi0009:89898989@cluster0.6sgbo.mongodb.net/?