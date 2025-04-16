const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(403).json({
        message: "You are not Authenticated",
      });
      return;
    }
    const response = jwt.verify(token, process.env.JWT_SECRET);
    if (response) {
      req.body._id = response._id;
      next();
    } else {
      res.status(403).json({
        message: "You are not Authenticated",
      });
      return;
    }
  } catch (error) {
    console.log("Auth Middleware Error: ", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token signature" });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

module.exports = isAuthenticated;
