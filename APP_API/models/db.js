const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://admin:Death_Zer0@cluster0.92efl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

require("./room");

mongoose.connect(dbURI, {
  dbName: "roomDB",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose  connected to ${dbURI}`);
  console.log("Connected sucessfull");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection error", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
