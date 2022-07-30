import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../components/Loader';


import Room from '../components/Room';
import Error from '../components/Error';
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/dist/antd.min.css';



const { RangePicker } = DatePicker;
function Homescreen() {
  // states for rooms to store room info
  const [rooms, setrooms] = useState([]);

  // loading state
  const [loading, setloading] = useState();

  // error state to store and display any errors
  const [error, seterror] = useState();


  // to store from and to dates
  const [fromdate, setfromdate] = useState();
  const [todate, settodate] = useState();

  
  const [duplicaterooms, setduplicaterooms] = useState([]);

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

        setduplicaterooms(data);

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

  function filterByDate(dates) {
    // dates from the range picker in format we need using moment js.
    // console.log(moment(dates[0]).format('DD-MM-YYYY'));
    // console.log(moment(dates[1]).format('DD-MM-YYYY'));

    // dates from the range picker in format we need using moment js
    // storing those dates into states ... so we can send to booking screen.
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))

    var temprooms = [];
    var availability = false;

    for (const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {

        for (const booking of room.currentbookings) {

          if (!moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
            && !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate)
          ) {
            if (
              moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
              moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability === true || room.currentbookings.length === 0) {
        temprooms.push(room)
      }

      setrooms(temprooms);
    }
  }
  return (

    <div className="container">
      <div className="row mt-5 mx-5">

        <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />

      </div>
      <div className="homescreen-section">

        {loading ? (<Loader> </Loader>) : error ? (<Error></Error>) : (rooms.map(room => {
          return <div className="col-md-10 mt-5 mb-5 mx-auto">
            <Room room={room} fromdate={fromdate} todate={todate}></Room>
          </div>;
        }))}
      </div>
    </div>

  );
}

export default Homescreen;
