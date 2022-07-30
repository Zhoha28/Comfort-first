import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

import Error from "../components/Error";

import "../styles/services.css";

function ServiceScreen() {
  // states for rooms to store room info
  const [service, setservice] = useState([]);

  // loading state
  const [loading, setloading] = useState();

  // error state to store and display any errors
  const [error, seterror] = useState();

  useEffect(() => {
    // fetch data through the API endpoint
    async function fetchData() {
      try {
        setloading(true); // while getting the data promised

        // getting the data
        const data = (await axios.get("/api/service/getservicedata")).data;
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
    <section className="wrapper">
      <div className="container-fostrap">
        <div className="content">
          <div className="container">
            <div>
              <h1>Our services</h1>
            </div>
            <div className="row">
              {loading ? (
                <Loader> </Loader>
              ) : error ? (
                <Error></Error>
              ) : (
                service.map((sr) => {
                  return (
                    <div className="col-xs-12 col-sm-4">
                      <div className="card">
                        <a className="img-card" href="/">
                          <img src={sr.pic} alt="{sr.heading}"/>
                        </a>
                        <div className="card-content">
                          <h4 className="card-title">{sr.heading}</h4>
                          <p className="">{sr.content}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceScreen;
