const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nexa-ai", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected To Local Mongodb Database ${mongoose.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log(`Mongo Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;