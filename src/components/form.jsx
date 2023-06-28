import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./form.css";
const Form = () => {
  return (
    <>
      <div className="form_container">
        <div className="img_form">
          <img
            src="https://nova-foods.s3.ap-south-1.amazonaws.com/marketLogin.svg"
            alt=""
          />
        </div>

        <div className="login_form">
          <NavLink to="home">
            <h1>
              <FiArrowLeft style={{ cursor: "pointer" }} />
            </h1>
          </NavLink>
          <h2 className="text">Login</h2>
          <div className="inpt_google">
            <FcGoogle className="google_icon" />
            <input type="text" placeholder="Sign in with Google" />
          </div>
          <p className="or">Or</p>
          <div className="email_password">
            <label placeholder="emaail">Email</label> <br />
            <input type="text" /> <br />
            <label placeholder="password">Password</label> <br />
            <input type="password" />
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <input type="checkbox" /> <p>Remember Me</p>
              <div className="text">
                <h5 style={{ color: "blue" }}>Forget Password</h5>
              </div>
            </div>
            <button className="login_btn">Login</button>
            <p className="login_info">
              Don't have an account ? <span>Register</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
