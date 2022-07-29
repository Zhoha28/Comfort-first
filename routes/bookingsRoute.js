const express = require("express");
const router = express.Router();
const Booking = require("../models/booking")
const Room = require("../models/room")

router.post("/bookroom", (req,res) => {
    const {room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays}=req.body

        try {
            const newbooking = new Booking({
                room: room._name,
                roomid:room._id,
                userid,
                fromdate: moment(fromdate).format('DD-MM-YYYY'),
                todate: moment(todate).format('DD-MM-YYYY'),
                totalamount,
                totaldays,
                transactionId : '1234'

            })
            const booking = newbooking.save();

            const roomtemp = Room.findOne({_id : room._id})

            roomtemp.cueentbookings.push({
                bookingid : booking._id, 
                fromdate : moment(fromdate).format('DD-MM-YYYY'), 
                todate : moment(todate).format('DD-MM-YYYY'),
                userid : userid,
                status : booking.status
            });
            roomtemp.save();

            res.send('Room Booked successfully')
        } catch (error) {
            return res.status(400).json({error});
        }
});
module.exports=router;