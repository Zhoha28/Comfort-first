const express = require("express");
const moment = require("moment");
const router = express.Router();
const Booking = require("../models/booking");
const Room = require("../models/room");


router.post("/bookroom", async (req, res) => {
    const { room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays } = req.body

    try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            // fromdate: moment(fromdate).format("DD-MM-YYYY"),
            // todate: moment(todate).format("DD-MM-YYYY"),
            fromdate: fromdate,
            todate: todate,
            totalamount,
            totaldays,
            transactionId: '1234'

        })
        const booking = await newbooking.save();

    


        var objFriends = {
            bookingid: booking._id,
            // fromdate: moment(fromdate).format("DD-MM-YYYY"),
            // todate: moment(todate).format("DD-MM-YYYY"),
            fromdate: fromdate,
            todate: todate,
            userid: userid,
            status: booking.status
        };

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






        res.send('Room Booked successfully')
    } catch (error) {
        return res.status(400).json({ error });
    }
});
module.exports = router;