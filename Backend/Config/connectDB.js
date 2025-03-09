const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.DATABASE_URL);
    if (res) {
      console.log("Connceted to DB");
    }
  } catch (error) {
    console.log("Connect Error: ", error);
  }
};

module.exports = connectDB;
