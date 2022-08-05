const mongoose = require("mongoose");
const aboutSchema = mongoose.Schema(
    {
        heading: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

const aboutModel = mongoose.model("about", aboutSchema);

module.exports = aboutModel;
