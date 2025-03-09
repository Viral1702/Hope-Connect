const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const AuthRouter = require("./Routes/auth");
const connnectDB = require("./Config/connectDB");
const CategoryRouter = require("./Routes/category");
const UserRouter = require("./Routes/user");

// Default Middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

// ===>> Auth Routes
app.use("/api/auth", AuthRouter);

// ===>> Category Routes
app.use("/api/category", CategoryRouter);

// ===>> User Routes
app.use("/api", UserRouter);

app.listen(process.env.PORT, () => {
  console.log("Listning.. at ", process.env.PORT);
  connnectDB();
});
