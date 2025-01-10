import express from "express"
import { loginUser , registerUser } from "../controllers/userController.js"


const userRouter = express.Router()

userRouter.post("/register" , registerUser)
userRouter.post("/login", loginUser)

<<<<<<< HEAD
export default userRouter;
=======
export default userRouter;
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
