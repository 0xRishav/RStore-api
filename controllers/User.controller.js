const asyncHandler = require("../utils/asyncHandler");
const authService = require("../services/authService");

exports.signUpUser = asyncHandler(async (req, res) => {
  const { token, user } = await authService.signup(req.body);
  return res.status(201).json({
    success: true,
    message: "User added successfully",
    token,
    user,
  });
});

exports.signInUser = asyncHandler(async (req, res) => {
  const { token, user } = await authService.signin(req.body);
  return res.status(200).json({
    success: true,
    message: "Sign In successful",
    token,
    user,
  });
});
