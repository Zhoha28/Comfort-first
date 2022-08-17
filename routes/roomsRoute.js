// contains end point of rooms

const express = require("express");
const { router } = require("server");
const Router = express.Router();

const Room = require("../models/room");

Router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await Room.find({});
    // return res.json({ rooms });
    res.send(rooms);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

// get a single room by its ID

Router.post("/getroombyid", async (req, res) => {
  const roomid = req.body.roomid;

  console.log(req.body);
  try {
    const room = await Room.findOne({ _id: roomid });
    res.send(room);
    console.log(room);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
Router.post("/addroom", async (req, res) => {
  try {
    const newroom = new Room(req.body);
    await newroom.save();

    res.send("New Room Added Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = Router;
