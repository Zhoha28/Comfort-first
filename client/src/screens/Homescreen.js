import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../components/Loader';


import Room from '../components/Room';
import Error from '../components/Error';


function Homescreen() {
  // states for rooms to store room info
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
    <div className="homescreen-section">
      {loading ? (<Loader> </Loader>) : error ?(<Error></Error>) : (rooms.map(room=>{
        return <div className="col-md-10 mt-5 mb-5 mx-auto">
          <Room room={room}></Room>
        </div>
      }))}
    </div>
  );
}

export default Homescreen;
