import "../styles/register.css";
import axios from "axios";
import React, { useState } from "react";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        const result = await axios.post("/api/users/register", user).data;
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords not matched");
    }
  }
  return (
    <div>
      <div className="row-justify-content-center mt-5">
        <div className="col-mid-5 mt-5">
          <div className="bs">
            <h2>Register</h2>
            <p>
              <input
                type="text"
                classname="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              ></input>
            </p>
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
                type="text"
                classname="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </p>
            <p>
              <input
                type="text"
                classname="form-control"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              ></input>
            </p>

            <button className="btn btn-primary mt-3 " onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
