import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import style from "./login.module.css";
import axios from "axios";
import video from "../../Assets/yt1s.com - Stock Market Background Video_1080p.mp4";
import { countryCode } from "./CountryCode";
import "react-phone-number-input/style.css";
import Login2 from "./Login2";
const Login = () => {
  let history = useHistory();

  const [pass, setPass] = useState("");

  const onPass = (e) => setPass(e.target.value);
  const [value, setValue] = useState("");
  console.log(value);
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
          <h1 className={style.heading}>Login</h1>

          <div className={style.inputs}>
            <div className={style.mobileCode}>
              <Login2 />
              <input type="tel" placeholder="Enter Mobile number" />
            </div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={pass}
              onChange={(e) => onPass(e)}
            />

            <button type="submit">Login</button>
          </div>
          <div className={style.register} style={{ margin: "1rem 0" }}>
            <p>Forget Password,</p> <Link to="/forgetpassword">Here</Link>
          </div>
          {/* <div className={style.register}>
            <p>New User Register,</p> <Link to="/register">Here</Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
