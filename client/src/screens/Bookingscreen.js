import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/room.css';
import Error from '../components/Error';
import Loader from '../components/Loader';


function Bookingscreen() {
    // get the roomid parameter
    const { roomid } = useParams();

    // for reference - ignore
    console.log("printing the params", useParams());


    // states for rooms to store room info
    const [room, setroom] = useState([]);

    // loading state
    const [loading, setloading] = useState();

    // error state to store and display any errors
    const [error, seterror] = useState();



    // useeffect
    useEffect(() => {
        // fetch data through the API endpoint
        async function fetchData() {
            try {
                setloading(true); // while getting the data promised

                const data = (await axios.post("/api/rooms/getroombyid", { roomid: roomid })).data;
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




    return (
        <div className='m-5'>
            {loading ? (<Loader> </Loader>) : room ? (<div>







                <div class="container">

                    <div class="grid product">
                        <div class="column-xs-12 column-md-7">
                            <div class="product-gallery">
                                <div class="product-image">
                                    <img src={room.imageurls[1]} alt={room.name}/>
                                </div>

                            </div>
                        </div>
                        <div class="column-xs-12 column-md-5">
                            <h1>{room.name}</h1>
                            <h2>${room.rentperday}/ day</h2>
                            <div class="description">

                                <p>{room.description}</p>
                            </div>
                            <button class="btn btn-dark">Pay Now</button>
                        </div>
                    </div>



                </div>



                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">From Date</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Rent per day</th>
                            <th scope="col">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Lorem Ipsum</th>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                            <td>{room.rentperday}</td>
                            <td>Lorem ipsum</td>


                        </tr>

                    </tbody>
                </table>





            </div>) : (<Error></Error>)}
        </div>
    );
}

export default Bookingscreen;