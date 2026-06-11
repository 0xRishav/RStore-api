const asyncHandler = require("../utils/asyncHandler");
const wishlistService = require("../services/wishlistService");

exports.addToWishlist = asyncHandler(async (req, res) => {
  const data = await wishlistService.addToWishlist(req.user._id, req.body.productId);
  return res.status(201).json({ success: true, data, message: "Added to wishlist" });
});

exports.removeFromWishlist = asyncHandler(async (req, res) => {
  const data = await wishlistService.removeFromWishlist(req.user._id, req.params.productId);
  return res.status(200).json({ success: true, data, message: "Removed from wishlist" });
});

exports.getAllwishlistItems = asyncHandler(async (req, res) => {
  const data = await wishlistService.getAllWishlistItems(req.user._id);
  return res.status(200).json({ success: true, data, message: "Wishlist items retrieved" });
});
