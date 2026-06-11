const asyncHandler = require("../utils/asyncHandler");
const cartService = require("../services/cartService");

exports.addToCart = asyncHandler(async (req, res) => {
  const data = await cartService.addToCart(req.user._id, req.body.productId);
  return res.status(201).json({ success: true, data, message: "Added to cart" });
});

exports.removeFromCart = asyncHandler(async (req, res) => {
  const data = await cartService.removeFromCart(req.user._id, req.params.productId);
  return res.status(200).json({ success: true, data, message: "Removed from cart" });
});

exports.changeQuantity = asyncHandler(async (req, res) => {
  const data = await cartService.changeQuantity(req.user._id, req.params.productId, req.body.quantity);
  return res.status(200).json({ success: true, data, message: "Cart quantity updated" });
});

exports.getAllCartItems = asyncHandler(async (req, res) => {
  const data = await cartService.getAllCartItems(req.user._id);
  return res.status(200).json({ success: true, data, message: "Cart items retrieved" });
});
