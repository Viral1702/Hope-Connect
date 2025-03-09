const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const AuthRouter = require("./Routes/Auth");
const connnectDB = require("./Config/connectDB");

// Default Middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

// ===>> Auth Routes
app.use("/api/auth", AuthRouter);

app.listen(process.env.PORT, () => {
  console.log("Listning.. at ", process.env.PORT);
  connnectDB();
});
