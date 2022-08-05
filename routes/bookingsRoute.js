const express = require("express");
const moment = require("moment");
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room");
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")(
    "sk_test_51LR4xpIAL09mD6D1TFoznce3E1Vkux8LPB5cAvMybODdQdCelIKbYWjTNlATgge6x6yN7IHoxYrKRJn4fQBtUpen00TrfHpr8R"
);



router.post("/bookroom", async (req, res) => {
    const { room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        token } = req.body;



    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });

        let payment = await stripe.charges.create(
            {
                amount: totalamount * 100,
                currency: "CAD",
                customer: customer.id,
                receipt_email: token.email,
            },
            {
                idempotencyKey: uuidv4(),
            }
        );


        if (payment) {
            console.log("payment going thru");
            try {
                // console.log("trying");
                const newbooking = new Booking({
                    room: room.name,
                    roomid: room._id,
                    userid,
                    // fromdate: moment(fromdate).format("DD-MM-YYYY"),
                    // todate: moment(todate).format("DD-MM-YYYY"),
                    fromdate: fromdate,
                    todate: todate,
                    totaldays: totaldays,
                    totalamount: totalamount,
                    transactionId: '1234',
                    status:'booked'

                })
                // console.log("trying 2");
                const booking = await newbooking.save();
                var objFriends = {
                    bookingid: booking._id,
                    // fromdate: moment(fromdate).format("DD-MM-YYYY"),
                    // todate: moment(todate).format("DD-MM-YYYY"),
                    fromdate: fromdate,
                    todate: todate,
                    userid: userid,
                    status:'booked'
                };

                // console.log("trying 3");
                
                await newbooking.save(async (err, booking) => {
                Room.findOneAndUpdate(
                    { _id: room._id },
                    { $push: { currentbookings: objFriends } },
                    function (error, success) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(success);
                        }
                    });
                });
                res.send('Room Booked successfully')
            } catch (error) {
                console.log("errr")
                return res.status(400).json({ error });
            }
        }
        else {
            res.send("Payment failed");
        }


    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" + error });
    }


});

router.post("/getbookingsbyuserid", async(req,res) => {
    const userid =req.body.userid
    try {
        const bookings =  await Booking.find({userid : userid})
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ message: "Something went wrong" + error });
    }
});

router.post("/cancelbooking",async(req,res) => {
    const {bookingid,roomid} =req.body
    try {
        const bookingitem =  await Booking.findOne({_id:bookingid})
        bookingitem.status = "cancelled"
        await bookingitem.save()
        const room = await Room.findOne({_id:roomid})
        const bookings = room.currentbookings 
        const temp = bookings.filter(booking=>booking.bookingid.toString()!==bookingid)
        room.currentbookings=temp
        await room.save()

        res.send("Booking Cancelled Successfully")
    } catch (error) {
        return res.status(400).json({error });
    }
});

module.exports = router;