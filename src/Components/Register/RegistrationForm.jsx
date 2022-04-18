import React from "react";
import style from "./login.module.css";
import { Link, useHistory } from "react-router-dom";
import LogIn from "../Login/LogIn";
import video from "../../Assets/yt1s.com - Stock Market Background Video_1080p.mp4";

const RegistrationForm = () => {
  const history = useHistory();
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
            <div className={style.mobile}>
              <h5 style={{ fontWeight: "bold" }} className="mb-3">
                +91 1234567891
              </h5>
            </div>

            <label htmlFor="Mobile Number">Enter Password</label>
            <div className={style.mobile}>
              <input
                type="password"
                maxLength="10"
                placeholder="Enter Password"
                required
              />
            </div>
            <label htmlFor="Mobile Number">Confirm Password</label>
            <div className={style.mobile}>
              <input
                type="password"
                maxLength="10"
                placeholder="Confirm Password"
                required
              />
            </div>

            <button
              type="submit"
              className={style.registerBtn}
              onClick={() => history.push("/")}
            >
              Submit
            </button>
          </div>
          <div className={style.register}>
            <p>Login,</p> <Link to="/">Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
