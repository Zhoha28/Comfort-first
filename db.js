const mongoose = require("mongoose");

// mongo db connection
var mongoURL = 'mongodb+srv://Megha:meghamathew@cluster0.if0uy.mongodb.net/comfort-first';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection

connection.on("connected", () => {
    console.log("Mongoose Connected sucessfully");
});

connection.on("error", (err) => {
    console.log("Mongoose Connection error", err);
});

connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});

module.exports = mongoose;