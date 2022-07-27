import "../styles/register.css";
import axios from "axios";
import React, { useState } from "react";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function login() {
    const user = {
      email,
      password,
    };
    try {
      const result = await axios.post("/api/users/login", user).data;
    } catch (error) {
      console.log(error);
    }
    console.log(user);
  }
  return (
    <div>
      <div className="row-justify-content-center mt-5">
        <div className="col-mid-5 mt-5">
          <div className="bs">
            <h2>Login</h2>

            <p>
              <input
                type="text"
                classname="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></input>
            </p>
            <p>
              <input
                type="password"
                classname="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </p>

            <button className="btn btn-primary mt-3 " onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
