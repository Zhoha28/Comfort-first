import "../styles/register.css";
import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';
import axios from "axios";
import React, { useState } from "react";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();
  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        setloading(true);
        const result = await axios.post("/api/users/register", user).data;
        setloading(false);
        setsuccess(true);

        setname('');
        setemail('');
        setpassword('');
        setcpassword('');
      } catch (error) {
        console.log(error);
        setloading(false);
        seterror(true);
      }
    } else {
      alert("Passwords not matched");
    }
  }
  return (
    <div>
      {loading && (<Loader/>)}
      {success && (<Success success='User Registered Successfully' />)}
      {error && (<Error error='Email already registred' />)}
      <div className="row-justify-content-center" id="registerform">
        <div className="col-mid-5">
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

            <button className="btn btn-primary btn-small-primary " onClick={register}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
