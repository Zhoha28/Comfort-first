import React, { useState, useEffect } from "react";
import '../styles/featuredrooms.css';

import axios from "axios";
import Loader from '../components/Loader';

import Error from '../components/Error';
import FeaturedRoom from './FeaturedRoom';

function FeaturedRooms() {
    const [rooms, setrooms] = useState([]);

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
          const data = (await axios.get("/api/rooms/getallrooms")).data;
          //    for reference.
          console.log("The data from api - " + data);
          //    setting data from api to the rooms state using setrooms
          setrooms(data);
  
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
        <section className="px-4" id="outerbg">
            <h4 className="subtitle pt-4">OUR LUXURY ROOMS</h4>
            <h2 className='title'>Featured Rooms</h2>
            <div className="featured-rooms-outer px-4">
            {loading ? (<Loader> </Loader>) : error ?(<Error></Error>) : (rooms.map(room=>{
        return <div className="px-4">
          <FeaturedRoom room={room}></FeaturedRoom>
        </div>
      }))}
          </div>

        </section>
    )
}

export default FeaturedRooms;