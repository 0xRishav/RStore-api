const asyncHandler = require("../utils/async-handler.util");
const cartService = require("../services/cart.service");

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

exports.getCartTotal = asyncHandler(async (req, res) => {
  const data = await cartService.getCartTotal(req.user._id);
  return res.status(200).json({ success: true, data, message: "Cart total calculated" });
});
