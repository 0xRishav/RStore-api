const asyncHandler = require("../utils/async-handler.util");
const checkoutService = require("../services/checkout.service");

exports.createOrder = asyncHandler(async (req, res) => {
  const data = await checkoutService.createOrder(req.user._id);
  return res.status(200).json({ success: true, message: "Order created", data });
});
