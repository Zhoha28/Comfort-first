import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

import Error from "../components/Error";

function Aboutscreen() {

   // states for rooms to store room info
   const [service, setservice] = useState([]);

   // loading state
   const [loading, setloading] = useState(true);
 
   // error state to store and display any errors
   const [error, seterror] = useState(false);

   useEffect(() => {
    // fetch data through the API endpoint
    async function fetchData() {
      try {
        setloading(true); // while getting the data promised

        // getting the data
        const data = (await axios.get("/api/about/getallabout")).data;
        //    for reference.
        console.log("The data from api - " + data);
        //    setting data from api to the rooms state using setrooms
        setservice(data);

        setloading(false); // after getting the data promised
      } catch (error) {
        // catching if any errors
        console.log(error);

        seterror(true); //if any error
        setloading(false); //not loading anymore
      }
    }
    // calling the async function
    fetchData();
  }, []);

  return (
    
    <div>
       {loading ? (
                <Loader> </Loader>
              ) : error ? (
                <Error></Error>
              ) : (
                service.map((sr) => {
                  return (
                    <div className="col-xs-12 col-sm-12 justify-center mx-auto" id="justify-cn">
        <img src={sr.pic} className='my-2' />
        <div id="about" class="container-fluid">
      <div class="row mx-4 my-4">
        <div class="col-md-12">
          <h2>About {sr.heading}</h2>
          <br />
          <div class="jumbotron">
            <h4>Hotel Overview</h4>
            <br />
            <p>
              {sr.description}
            </p>
          </div>
        </div>
      </div>
    </div> </div>
    );
                })
              )}

    </div>
    
  )
}

export default Aboutscreen