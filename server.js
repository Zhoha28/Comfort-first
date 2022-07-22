//express variable
const express = require("express");

// calling it
const app = express();

// database configuration
const dbConfig = require('./db')

const roomsRoute = require('./routes/roomsRoute');

// to receive params
app.use(express.json());

app.use('/api/rooms', roomsRoute);

//port for express - 3000 in this case
const port = process.env.PORT || 6000;

// listen when node server started - and log the message
app.listen(port, () => console.log(`Node Sever started and running on port...${port}`));

