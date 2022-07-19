const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: { type: "string", required: true, min: 3 },
  type: { type: "string", required: true },
});

module.exports = mongoose.model("Room", roomSchema);
