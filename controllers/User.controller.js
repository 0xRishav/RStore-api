const asyncHandler = require("../utils/asyncHandler");
const authService = require("../services/authService");

exports.signUpUser = asyncHandler(async (req, res) => {
  const data = await authService.signup(req.body);
  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data,
  });
});

exports.signInUser = asyncHandler(async (req, res) => {
  const data = await authService.signin(req.body);
  return res.status(200).json({
    success: true,
    message: "Sign in successful",
    data,
  });
});
