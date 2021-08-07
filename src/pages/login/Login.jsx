import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            className="logo"
          />
          
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password"/>
          <button className="loginButton">Sign In</button>
          <span>New to Netflix? <b>Sign up now.</b></span>
          <small>
            This page is protected by Google recAPTCHA to ensure you're not a bot. 
            <b> Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}
