const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const serviceModel = mongoose.model("service", serviceSchema);

module.exports = serviceModel;
