let express = require("express");

let router = express.Router();

let ctrlRoom = require("../controllers/room");

router.get("/rooms", ctrlRoom.getRooms);
router.post("/rooms", ctrlRoom.createRoom);
router.get("/rooms/:roomid", ctrlRoom.getSingleRoom);
router.put("/rooms/:roomid", ctrlRoom.updateRoom);
router.delete("/rooms/:roomid", ctrlRoom.deleteRoom);

module.exports = router;
