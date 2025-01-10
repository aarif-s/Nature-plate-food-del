<<<<<<< HEAD
import express from "express";
import {
  addfood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer"; //image storage system

const foodRouter = express.Router();

// image storage ingine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addfood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
=======
import express from 'express'
import { addfood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'     //image storage system


const foodRouter = express.Router();

// image storage ingine 

const storage = multer.diskStorage({
    destination : "uploads",
    filename: (req,file,cb)=>{
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"),addfood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
