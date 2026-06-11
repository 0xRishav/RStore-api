const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

const JWT_SECRET = process.env.JWT_SECRET || "rstore-jwt-secret-dev";

function signToken(id) {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "7d" });
}

function sanitizeUser(user) {
  const obj = user.toObject();
  delete obj.password;
  return obj;
}

async function signup({ name, email, password }) {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new AppError("This email is already registered", 409);
  }

  const user = await User.create({ name, email, password });
  const token = signToken(user._id);
  return { token, user: sanitizeUser(user) };
}

async function signin({ email, password }) {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = signToken(user._id);
  return { token, user: sanitizeUser(user) };
}

module.exports = { signup, signin };
