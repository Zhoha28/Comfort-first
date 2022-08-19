import "../styles/register.css";
import Loader from '../components/Loader';
import Error from '../components/Error';
import axios from "axios";
import React, { useState } from "react";
import Success from '../components/Success';

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);


  async function login() {
    const user = {
      email,
      password,
    };
    try {
      setloading(true);
      const result = (await axios.post("/api/users/login", user)).data;
      setloading(false);

      localStorage.setItem('currentUser', JSON.stringify(result));
      window.location.href = '/home';
    } catch (error) {
      seterror(true)
      setloading(false)
      console.log(error);
    }

  }
  return (
    <>
      {loading && (<Loader />)}
      <div class="container mt-5 mx-auto">
      
      {error && (<Error error='Invalid Credentials' />)}
          {success && (<Success success='User Login Successfull' />)}
        <div class="row d-flex justify-content-center">
     
          <div class="col-md-6">
          <h2 className="mx-auto">LOGIN</h2>
            <div class="card px-5 py-5" id="loginform">
              <div class="form-data" v-if="!submitted">
                <div class="forms-inputs mb-4" > <span>Email or username</span> <input
                 value={email}
                 onChange={(e) => {
                   setemail(e.target.value);
                 }}
                autocomplete="off" type="text" />
              
                </div>
                <div class="forms-inputs mb-4"> <span>Password</span> <input 
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                autocomplete="off" type="password"  />
                 
                </div>
                <div class="mb-3"> <button class="btn btn-dark w-100"
                onClick={login}
                >Login</button> </div>
              </div>
         
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row-justify-content-center mt-5 mb-5 bs" id="loginform">
        <div className="col-mid-5">
          {error && (<Error error='Invalid Credentials' />)}
          {success && (<Success success='User Login Successfull' />)}
          <div id="justifycn">
            <h2>Login</h2>

            <p>
              <input
                type="email"
                classname="form-control custom-input"
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
                classname="form-control custom-input"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </p>

            <button className="btn btn-small-primary" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Loginscreen;
