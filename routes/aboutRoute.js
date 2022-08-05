// contains end point of rooms

const express = require ('express');
const Router = express.Router();

const Ab = require('../models/about');

Router.get("/getallabout", async(req, res) => {

    try {
        const about = await Ab.find({});
        // return res.json({ rooms });
        res.send(about);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: error})
    }
   
});

module.exports = Router;
