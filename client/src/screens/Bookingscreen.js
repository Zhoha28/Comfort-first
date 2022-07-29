import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/room.css';
import Error from '../components/Error';
import Loader from '../components/Loader';
import moment from 'moment';

function Bookingscreen({match}) {
    // get the roomid parameter
    // for reference - ignore
    console.log("printing the params", useParams());

    // states for rooms to store room info
    const [room, setroom] = useState([]);

    // loading state
    const [loading, setloading] = useState(true);

    // error state to store and display any errors
    const [error, seterror] = useState(false);

    const { roomid } = useParams();
    
    // const roomid = match.params.roomid;
    const { fromdate } = moment(useParams('DD-MM-YYYY'));
    const { todate } = moment(useParams('DD-MM-YYYY'));
    // const fromdate = moment(match.params.fromdate,'DD-MM-YYYY');
    // const todate = moment(match.params.todate,'DD-MM-YYYY');

    const totaldays = moment.duration(todate.diff(fromdate)).asDays()+1;
    const [totalamount, settotalamount] = useState();

    // useeffect
    useEffect(() => {
        // fetch data through the API endpoint
        async function fetchData() {
            try {
                setloading(true); // while getting the data promised

                const data = (await axios.post("/api/rooms/getroombyid", { roomid: roomid })).data;
                settotalamount(data.rentperday*totaldays);
                setroom(data);
                console.log("data from api", data);
                setloading(false); // after getting the data promised
            } catch (error) {
                // catching if any errors
                console.log(error);
                setloading(false); //not loading anymore
                seterror(true); //if any error

            }
        }
        // calling the async function
        fetchData();
    }, []);

    async function bookRoom(){
        const bookingDetails = {
            room,
            userid:JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays
        }
        try{
            const result = await axios.post('/api/bookings/bookroom',bookingDetails)
        }catch(error){

        }
    }


    return (
        <div className='m-5'>
            {loading ? (<Loader> </Loader>) : room ? (<div>


                <div class="container">

                    <div class="grid product">
                        <div class="column-xs-12 column-md-7">
                            <div class="product-gallery">
                                <div class="product-image">
                                    {/* <img src={room.imageurls[1]} alt={room.name}/> */}
                                </div>

                            </div>
                        </div>
                        <div class="column-xs-12 column-md-5">
                            <h1>{room.name}</h1>
                            <h2>${room.rentperday}/ day</h2>
                            <div class="description">

                                <p>{room.description}</p>
                            </div>
                            <button class="btn btn-dark" onClick={bookRoom}>Pay Now</button>
                        </div>
                    </div>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">From Date </th>
                            <th scope="col">To Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Total days</th>
                            <th scope="col">Rent per day</th>
                            <th scope="col">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{JSON.parse(localStorage.getItem('currentUser')).name}</th>
                            <td>{match.params.fromdate}</td>
                            <td>{match.params.todate}</td>
                            <td>Lorem ipsum</td>
                            <td>{totaldays}</td>
                            <td>{room.rentperday}</td>
                            <td>{totalamount}</td>
                        </tr>
                    </tbody>
                </table>

            </div>) : (<Error></Error>)}
        </div>
    );
}

export default Bookingscreen;