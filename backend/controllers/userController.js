import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


// Login user
const loginUser = async (req, res) => {
  // Logic for login will go here

   const {email,password} = req.body;
   
   
   try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: "User doesn't exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid password." });
    }

    const token = createToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



// Generate JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" }); // Token expires in 1 hour
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    

    // Check if the user already exists
    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists." });
    }


    // Validate email format and password strength
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format." });
    }

      if (!validator.isStrongPassword(password, { minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long, with uppercase, lowercase, numbers, and symbols.",
      });

    }

    
    // Hash the user password
    const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed (default: 10)  5-15
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Generate a token
    const token = createToken(user._id);

    // Respond with success and token
    res.status(201).json({ success: true, token });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { loginUser, registerUser };





