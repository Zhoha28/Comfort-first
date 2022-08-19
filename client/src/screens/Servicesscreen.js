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
    <>
    <section className="site-hero inner-page overlay" style={{ backgroundImage: `url('https://i.postimg.cc/6pF9GVxj/hero-4.jpg')` }} data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row site-hero-inner justify-content-center align-items-center">
        <div className="col-md-10 text-center" data-aos="fade">
          <h1 className="heading mb-3">Services</h1>
         
        </div>
      </div>
    </div>

    <a className="mouse smoothscroll" href="#next">
      <div className="mouse-icon">
        <span className="mouse-wheel"></span>
      </div>
    </a>
  </section>
        
    <section className="wrapper">
      <div className="container-fostrap">
        <div className="content">
          <div className="container">
          <div class="row">
            <div className="row">
              {loading ? (
                <Loader> </Loader>
              ) : error ? (
                <Error></Error>
              ) : (
                service.map((sr) => {
                  return (
                
                      
               
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12 post mb-5" data-aos="fade-up" data-aos-delay="100">
              
                          <div class="media media-custom d-block mb-4 h-100">
                            <a href="#" class="mb-4 d-block"><img src={sr.pic} alt="Image placeholder" class="img-fluid" /></a>
                            <div class="media-body">
                              <h2 class="mt-0 mb-3">{sr.heading}</h2>
                              <p>{sr.content}</p>
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
      </div>
    </section>
    </>
    
  );
}

export default ServiceScreen;
