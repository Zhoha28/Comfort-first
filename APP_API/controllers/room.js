// const food = require("../../APP_SERVER/models/food");
const room = require("../models/room");

const getRooms = (req, res) => {
  room.find().exec((err, roomdata) => {
    if (err) {
      res.status(404).json(err);

      return;
    }

    res.status(200).json(roomdata);
  });
};

const createRoom = (req, res) => {
  console.log("let's c", req.body);
  room.create(
    {
      name: req.body.name,
      type: req.body.type,
    },
    (err, roomdata) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(roomdata);
      }
    }
  );
};

const getSingleRoom = (req, res) => {
  const foodId = req.params.foodid;

  room.findById({ _id: roomId }).exec((err, roomdata) => {
    if (err) {
      res.status(404).json(err);

      return;
    }

    res.status(200).json(roomdata);
  });
};

const updateRoom = (req, res) => {
  const roomid = req.params.roomid;

  if (!req.params.foodid) {
    res.status(404).json({ Message: "Not room, roomid is required" });
    return;
  }
  food.findById(foodid).exec((err, fooddata) => {
    if (!fooddata) {
      res.status(404).json({ message: "roomid not found" });
      return;
    } else if (err) {
      res.status(400).json(err);
      return;
    }

    roomdata.name = req.body.name;
    roomdata.type = req.body.type;
    roomdata.save((err, Roomdata) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(Roomdata);
      }
    });
  });
};

const deleteRoom = (req, res) => {
  const roomid = req.params.roomid;

  if (roomid) {
    food.findOneAndRemove(roomid).exec((err, roomdata) => {
      if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(204).json(null);
    });
  } else {
    res.status(404).json({ Message: "No room id" });
  }
};

module.exports = {
  getRooms,
  createRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom,
};
