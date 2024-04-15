const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
// const { User } = require("./models");

// Error Handling
module.exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV == "Prod" ? null : err.stack,
  });
  next();
};

// User Auth


//  isAuthor



// isAdmin