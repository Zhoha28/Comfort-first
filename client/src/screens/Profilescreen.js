import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import "../styles/register.css"
import Error from '../components/Error';
import Loader from '../components/Loader';
import axios from 'axios'
import Swal from 'sweetalert2'
import { Tag, Divider } from 'antd';
const { TabPane } = Tabs



function Profilescreen() {

    const user = JSON.parse(localStorage.getItem("currentUser"))
    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }
    }, [])

    return (
        <div className='my-5 mx-3'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <h1>My Profile</h1>
                    <br />
                    <div className='bs'>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
                        <p>{user.isAdmin ? <a href="/admin" className='btn btn-primary'>Go to admin panel    </a> : ''}</p>
                        <br />
                    </div>
                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <MyBookings />
                </TabPane>

            </Tabs>
        </div>
    )
}

export default Profilescreen



export function MyBookings() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const [bookings, setbookings] = useState([])
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    useEffect(() => {
        async function fetchData() {
            try {
                setloading(true);
                const data = await
                    (await axios.post("/api/bookings/getbookingsbyuserid", { userid: user._id })).data;
                console.log(data);
                setbookings(data)
                setloading(false)
            } catch (error) {
                console.log(error);
                setloading(false)
                seterror(error)
            }
        }
        fetchData();

    }, [])

    async function cancelBooking(bookingid, roomid) {

        try {
            console.log("this is in try block")
            setloading(true)
            const result = axios.post('/api/bookings/cancelbooking', { bookingid: bookingid, userid: user._id, roomid: roomid });

            console.log("this is in try block" + result)
            setloading(false)
            Swal.fire('Congrats', 'Your Room has been cancelled succeessfully', 'success').then(result => {
                window.location.href = '/profile'
            })
        } catch (error) {
            console.log("this is in catch block")
            console.log(error)
            setloading(false)
            Swal.fire('Oops', 'Something went wrong', 'error').then(result => {
                window.location.href = '/profile'
            })
        }
    }

    return (
        <div>
            <div className='row mx-3 my-3'>
                <div className='col-md-6'>
                    {loading && (<Loader />)}
                    {bookings && (bookings.map(booking => {
                        return <div className='bs'>
                            <h4>{booking.room}</h4>
                            <p><b>Booking Id:</b> {booking._id}</p>
                            <p><b>Checking Date:</b> {booking.fromdate}</p>
                            <p><b>Check Out Date:</b> {booking.todate}</p>
                            <p><b>Amount: </b>{booking.totalamount}</p>
                            <p><b>Status:</b> {booking.status == 'booked' ? (<Tag color="green">Confirmed</Tag>) : (<Tag color="red">Cancelled</Tag>)}</p>
                            <div className='text-right'>
                                {booking.status == 'booked' && (<button className='btn btn-primary' onClick={() => cancelBooking(booking._id, booking.roomid)}>Cancel Booking</button>)}
                            </div>
                            <br />
                        </div>
                    }))}

                </div>

            </div>
        </div>
    )
}



