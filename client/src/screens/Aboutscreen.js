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
    <>

      {loading ? (
        <Loader> </Loader>
      ) : error ? (
        <Error></Error>
      ) : (
        service.map((sr) => {
          return (
            <>
              <section className="site-hero inner-page overlay" style={{ backgroundImage: `url('https://i.postimg.cc/6pF9GVxj/hero-4.jpg')` }} data-stellar-background-ratio="0.5">
                <div className="container">
                  <div className="row site-hero-inner justify-content-center align-items-center">
                    <div className="col-md-10 text-center" data-aos="fade">
                      <h1 className="heading mb-3">About Us</h1>
                     
                    </div>
                  </div>
                </div>

                <a className="mouse smoothscroll" href="#next">
                  <div className="mouse-icon">
                    <span className="mouse-wheel"></span>
                  </div>
                </a>
              </section>
              <section className="py-5 bg-light" id="next">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5" data-aos="fade-up">
                      <figure className="img-absolute">
                        <img src="https://i.postimg.cc/xCJpNHYR/food-1.jpg" alt="Image" className="img-fluid" />
                      </figure>
                      <img src={sr.pic} alt="Image" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-12 col-lg-4 order-lg-1" data-aos="fade-up">
                      <h2 className="heading">Welcome!</h2>
                      <p className="mb-4"> {sr.description}</p>

                    </div>

                  </div>
                </div>
              </section>
           
            </>




          )
        }
        )
      )
      }

    </>
  )
}

export default Aboutscreen