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
    <>
      {loading && (<Loader/>)}
      {success && (<Success success='User Registered Successfully' />)}
      {error && (<Error error='Email already registred' />)}


      <div class="row d-flex justify-content-center">
     
     <div class="col-md-6">
     <h2 className="mx-auto">REGISTER</h2>
       <div class="card px-5 py-5" id="registerform">
         <div class="form-data">
           <div class="forms-inputs mb-4" > <span>Name</span> <input
                type="text"
                classname="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              ></input>
         
           </div>

           <div class="forms-inputs mb-4" > <span>Email</span>  <input
                type="text"
                classname="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></input>
         
           </div>

           <div class="forms-inputs mb-4"> <span>Password</span>    <input
                type="text"
                classname="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            
           </div>
           <div class="forms-inputs mb-4"> <span>Password</span>    <input
                type="text"
                classname="form-control"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              ></input>
            
           </div>
           <div class="mb-3"> <button class="btn btn-dark w-100"
          
          onClick={register}>Register</button> </div>
         </div>
    
       </div>
     </div>
   </div>




    </>
  );
}

export default Registerscreen;
