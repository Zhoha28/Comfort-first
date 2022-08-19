import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/room.css';
import Error from '../components/Error';
import Loader from '../components/Loader';
import moment from 'moment';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';


function Bookingscreen(match) {
    // get the roomid parameter
    const { roomid } = useParams();

    const { fromdate } = useParams(moment(match.fromdate, 'DD-MM-YYYY'));
    const { todate } = useParams(moment(match.todate, 'DD-MM-YYYY'));
    // { fromdate } = setParams(moment(fromdate , 'DD-MM-YYYY'));

    // console.log("fromdate " + fromdate)
    // states for rooms to store room info
    const [room, setroom] = useState([]);

    // loading state
    const [loading, setloading] = useState();

    // image
    const [img, setimg] = useState();

    // error state to store and display any errors
    const [error, seterror] = useState();

    // const totalDays = moment.duration(todate.diff(fromdate)).asDays()+1
    const totaldays = moment(todate, 'DD-MM-YYYY').diff(moment(fromdate, 'DD-MM-YYYY'), 'days');
    const [totalamount, settotalamount] = useState(0)

    // const [totalAmount , settotalAmount]=useState();
    console.log("totalday - " + totaldays);

    // useeffect
    useEffect(() => {
        // fetch data through the API endpoint
        if (!localStorage.getItem('currentUser')) {
            window.location.reload = '/login'
        }
        async function fetchData() {
            try {
                setloading(true); // while getting the data promised

                const data = (await axios.post("/api/rooms/getroombyid", { roomid: roomid })).data;
                setroom(data);
                // console.log("data from api", data);
                settotalamount(data.rentperday * totaldays);
                setimg(data.imageurls[0])
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





    async function onToken(token) {
        console.log(token);
        const bookingDetails = {
            room,
            userid: JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays,
            token
        }
        try {
            setloading(true);
            const result = await axios.post('/api/bookings/bookroom', bookingDetails);
            setloading(false)
            Swal.fire('Congrats', 'Your Room has booked succeessfully', 'success').then(result => {
                window.location.href = '/profile'
            })
        } catch (error) {
            setloading(false)
            Swal.fire('Oops', 'Something went wrong , please try later', 'error');
        }
    }


    return (
        <>

            <section id="outerbg">

                <div >
                    {loading ? (<Loader />) : error ? (<Error />)

                        : room ?
                            (<>
                                <section className="site-hero inner-page overlay" style={{ backgroundImage: `url(${img})` }} data-stellar-background-ratio="0.5">
                                    <div className="container">
                                        <div className="row site-hero-inner justify-content-center align-items-center">
                                            <div className="col-md-10 text-center" data-aos="fade">
                                                <h1 className="heading mb-3">{room.name}</h1>

                                            </div>
                                        </div>
                                    </div>

                                    <a className="mouse smoothscroll" href="#next">
                                        <div className="mouse-icon">
                                            <span className="mouse-wheel"></span>
                                        </div>
                                    </a>
                                </section>

                                <div className="container">

                                    <div className="grid product">
                                
                                        <div className="column-xs-12 column-md-12">
                                           
                                            <h2>Room rent is - ${room.rentperday}/ day</h2>
                                            <div className="description">

                                                <p>{room.description}</p>
                                            </div>

                                            <StripeCheckout
                                                amount={totalamount * 100}
                                                token={onToken}
                                                currency='CAD'
                                                stripeKey="pk_test_51LR4xpIAL09mD6D1DligdTHdNu9996tTqUFG1MC6O7G9vLQCBjO75IWcmz7oGq6g8tyRDydBSOXukKGrSVvgm2ZJ00xUJVtCPS"
                                            >
                                                <button className="btn btn-primary">Pay Now</button>
                                            </StripeCheckout>
                                        </div>
                                    </div>
                                </div>

                                <table className="table table-responsive bg-dark text-white container my-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">From Date</th>
                                            <th scope="col">To Date</th>
                                            <th scope="col">Total days</th>

                                            <th scope="col">Rent per day</th>
                                            <th scope="col">Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <th scope="row">{JSON.parse(localStorage.getItem('currentUser')).name}</th>
                                            <td>$ {room.rentperday}</td>

                                            <td>{fromdate}</td>
                                            <td>{todate}</td>
                                            <td>{totaldays}</td>
                                            <td>{room.rentperday}</td>
                                            <td>{totalamount}</td>


                                        </tr>

                                    </tbody>
                                </table>





                            </>) : (<Error></Error>)}
                </div>
            </section>
        </>
    );
}

export default Bookingscreen;