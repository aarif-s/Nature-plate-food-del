<<<<<<< HEAD
import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Validate email format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Clear error messages and data on state switch
  const switchState = (newState) => {
    setCurrState(newState);
    setErrorMessage("");
    setData({ name: "", email: "", password: "" });
  };

  // Handle form submission
  const onLogin = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!isValidEmail(data.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage(""); // Clear previous errors
      const endpoint =
        currState === "Login" ? "/api/user/login" : "/api/user/register";
      const response = await axios.post(`${url}${endpoint}`, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        alert(`${currState} successful!`);
        setShowLogin(false);
      } else {
        setErrorMessage(
          response.data.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      const backendMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again later.";
      // alert(backendMessage)
      setErrorMessage(backendMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            role="button"
            aria-label="Close Login Popup"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" disabled={isLoading}>
          {isLoading
            ? "Processing..."
            : currState === "Sign Up"
            ? "Create account"
            : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => switchState("Sign Up")} role="button">
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => switchState("Login")} role="button">
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

// we can remove error message useState and can only use alert in catch block
=======
import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
          <form   className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
              {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
              <input type="email" placeholder='Your email'  required/>
              <input type="password"  placeholder='Password' required/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
               <input type="checkbox" required />
               <p>By continuing, I agree the terms of use and privacy policy.</p>
            </div>
            {currState==="Login"? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<></>}
            {currState==="Sign Up"?<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>:<></>}
          </form>
             
    </div>
  )
}

export default LoginPopup
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
