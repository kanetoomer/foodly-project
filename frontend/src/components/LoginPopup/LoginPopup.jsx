import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p className="agreement">
            By continuing, you agree to the{" "}
            <span className="terms">Terms & Conditions</span> and{" "}
            <span className="terms">Privacy Policy</span>
          </p>
        </div>
        {currState === "Login" ? (
          <p className="account-type" onClick={() => setCurrState("Sign Up")}>
            Create a New Account?
          </p>
        ) : (
          <p className="account-type" onClick={() => setCurrState("Login")}>
            Already have an account?
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
