// contains end point of rooms

const express = require("express");
const Router = express.Router();

const Service = require("../models/service");

Router.get("/getservicedata", async (req, res) => {
  try {
    const services = await Service.find({});
    // return res.json({ rooms });
    res.send(services);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
});

module.exports = Router;
