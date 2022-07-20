
const { default: mongoose } = require('mongoose');

require('mongoose');

// creating room schema
const roomSchema = mongoose.Schema({
    roomName : {
        type: String,
        required: true
    },
    maxCount :{
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    rentPerDay: {
        type: Number,
        required: true
    },
    imageurls: [],
    currentBookings: [],
    type: {
        type: String,
        required: true
    },
    roomDescription:{
        type: String,
        required: true
    }
}, {
    timestamps : true
})

const roomModel = mongoose.model('rooms', roomSchema);

//export room model
module.exports = roomModel;