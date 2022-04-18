import React, { useState } from "react";
import style from "./login.module.css";
import { Link, useHistory } from "react-router-dom";
import LogIn from "../Login/LogIn";
import video from "../../Assets/yt1s.com - Stock Market Background Video_1080p.mp4";
import { countryCode } from "../Login/CountryCode";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import Login2 from "../Login/Login2";

const Register = () => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const sendOTP = async () => {
    const json = {
      phone: `${value}`,
    };
    await axios.post("http://localhost:5000/sendOTP", json);
  };
  return (
    <div className={style.mycontainer}>
      <div className={style.backgroundVideo}>
        <video muted autoPlay loop src={video} />
      </div>
      <div className={`container ${style.formbody}`}>
        <div className={style.crossIcon} onClick={() => history.push("/")}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <form>
          <h1 className={style.heading}>Register</h1>

          <div className={style.inputs}>
            <label htmlFor="Mobile Number">Mobile Number</label>
            <div className={style.mobileCode}>
              <Login2 />
              <input type="tel" placeholder="Enter Mobile number" />
            </div>
            <button
              type="button"
              className="mb-4 "
              // style={{ background: "grey" }}
              onClick={() => sendOTP()}
            >
              Get Otp
            </button>
            <input
              type="password"
              maxLength="6"
              required
              placeholder="Enter OTP"
            />

            <button
              type="submit"
              className={style.registerBtn}
              onClick={() => history.push("/register-2")}
            >
              Submit
            </button>
          </div>
          <div className={style.register}>
            <p>Login,</p> <Link to="/login">Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
