const db = require("../models");
const asyncHandler = require("express-async-handler");
const {throwErrorWithStatus} = require("../middlewares/errorHandler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getCurrent = asyncHandler(async (req, res) => {
  const {uid} = req.user;

  // Handle logic
  const response = await db.User.findByPk(uid, {
    attributes: {
      exclude: ["password"],
    },
  });

  return res.json({
    success: Boolean(response),
    mes: response ? "Got." : "Cannot get user.",
    currentUser: response,
  });
});
module.exports = {
  getCurrent,
};
