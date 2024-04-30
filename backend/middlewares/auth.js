const User = require("../models/User");

const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({
      message: "Please login first",
    });
  }

  try {
    const id = await jwt.verify(token, process.env.JWT_SECRET);
    const admin = await User.findOne({ _id: id });

    if (!admin) {
      return res.status(404).json({
        message: "User  not found",
      });
    }

    req.user = admin;
    next();
  } catch (error) {
   
        return res.status(404).json({
          message: "Token is wrong",
        });

  }
};
