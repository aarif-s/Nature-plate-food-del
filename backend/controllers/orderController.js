import Razorpay from "razorpay";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
 

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

 const frontend_url = "http://localhost:5173"

// Placing user order from frontend
const placeOrder = async (req, res) => {
   

  try {
    // Create a new order in the database
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
      
    // Clear the user's cart
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Create a Razorpay order
    // const options = {
    //   amount: req.body.amount * 100, // Amount in paise (smallest currency unit)
    //   currency: "INR",
    //   receipt: `receipt_${newOrder._id}`,
    // };

    const line_items = req.body.items.map((item)=>({
       price_data :{
          currency :"inr",
          product_data :{
            name: item.name
          },
          unit_amount:item.price*100
       },
       quantity:item.quantity
    }))

    line_items.push({
       price_data:{
           currency:"inr",
           product_data:{
               name:"Delievery Charge"
           },
       },
       quantity:1
    })

    // const razorpayOrder = await razorpay.orders.create(options);
    // if (!razorpayOrder) {
    //   throw new Error('Failed to create Razorpay order');
    // }

    const session = await razorpay.checkout.sessions.create({
      line_items :line_items,
      mode :"payment",
      success_url :`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url : `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    
    })
       res.json({success:true,session_url:session.url})

    // Send Razorpay order ID to the frontend
    // res.json({
    //   success: true,
    //   orderId: newOrder._id,
    //   razorpayOrderId: razorpayOrder.id,
    //   amount: options.amount,
    //   session_url: razorpayOrder.short_url,  // Razorpay checkout URL
    // });
  } catch (error) {
    console.error("Error placing order lol:", error.message);
    console.error(error.stack);  // Logs stack trace for deeper insights
    res.status(500).json({ success: false, message: "Order placement failed lol", error: error.message });

  }
};

// Verifying payment
const verifyPayment = async (req, res) => {
  const { orderId, razorpayPaymentId, razorpaySignature } = req.body;

  try {
    const crypto = await import("crypto");
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(orderId + "|" + razorpayPaymentId)
      .digest("hex");

    if (generatedSignature === razorpaySignature) {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.json({ success: false, message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ success: false, message: "Payment verification failed" });
  }
};

export { placeOrder, verifyPayment };























// import Razorpay from "razorpay";
// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
 

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

//  const frontend_url = "http://localhost:5173"

// // Placing user order from frontend
// const placeOrder = async (req, res) => {
   

//   try {
//     // Create a new order in the database
//     const newOrder = new orderModel({
//       userId: req.body.userId,
//       items: req.body.items,
//       amount: req.body.amount,
//       address: req.body.address,
//     });
//     await newOrder.save();
      
//     // Clear the user's cart
//     await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//     // Create a Razorpay order
//     // const options = {
//     //   amount: req.body.amount * 100, // Amount in paise (smallest currency unit)
//     //   currency: "INR",
//     //   receipt: `receipt_${newOrder._id}`,
//     // };

//     const line_items = req.body.items.map((item)=>({
//        price_data :{
//           currency :"inr",
//           product_data :{
//             name: item.name
//           },
//           unit_amount:item.price*100
//        },
//        quantity:item.quantity
//     }))

//     line_items.push({
//        price_data:{
//            currency:"inr",
//            product_data:{
//                name:"Delievery Charge"
//            },
//        },
//        quantity:1
//     })

//     // const razorpayOrder = await razorpay.orders.create(options);
//     // if (!razorpayOrder) {
//     //   throw new Error('Failed to create Razorpay order');
//     // }

//     const session = await razorpay.checkout.sessions.create({
//       line_items :line_items,
//       mode :"payment",
//       success_url :`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//       cancel_url : `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    
//     })
//        res.json({success:true,session_url:session.url})

//     // Send Razorpay order ID to the frontend
//     // res.json({
//     //   success: true,
//     //   orderId: newOrder._id,
//     //   razorpayOrderId: razorpayOrder.id,
//     //   amount: options.amount,
//     //   session_url: razorpayOrder.short_url,  // Razorpay checkout URL
//     // });
//   } catch (error) {
//     console.error("Error placing order lol:", error.message);
//     console.error(error.stack);  // Logs stack trace for deeper insights
//     res.status(500).json({ success: false, message: "Order placement failed lol", error: error.message });

//   }
// };

// // Verifying payment
// const verifyPayment = async (req, res) => {
//   const { orderId, razorpayPaymentId, razorpaySignature } = req.body;

//   try {
//     const crypto = await import("crypto");
//     const generatedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(orderId + "|" + razorpayPaymentId)
//       .digest("hex");

//     if (generatedSignature === razorpaySignature) {
//       await orderModel.findByIdAndUpdate(orderId, { payment: true });
//       res.json({ success: true, message: "Payment verified successfully" });
//     } else {
//       res.json({ success: false, message: "Payment verification failed" });
//     }
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     res.status(500).json({ success: false, message: "Payment verification failed" });
//   }
// };

// export { placeOrder, verifyPayment };