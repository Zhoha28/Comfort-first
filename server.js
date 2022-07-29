//express variable
const express = require("express");

// calling it
const app = express();

// database configuration
const dbConfig = require("./db");

const roomsRoute = require("./routes/roomsRoute");
const userRoute = require("./routes/usersRoute");
const serviceRoute = require("./routes/serviceRoute");
const bookingsRoute = require("./routes/bookingsRoute");
const aboutRoute = require("./routes/aboutRoute");
// to receive params
app.use(express.json());

app.use("/api/rooms", roomsRoute);
app.use("/api/users", userRoute);
app.use("/api/service", serviceRoute);
app.use("/api/bookings",bookingsRoute);
app.use("/api/about",aboutRoute);
//port for express - 3000 in this case
// const port = process.env.PORT || 6000;
const port = 6001;

// listen when node server started - and log the message
app.listen(port, () =>
  console.log(`Node Sever started and running on port...${port}`)
);
