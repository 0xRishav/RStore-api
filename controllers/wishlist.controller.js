const asyncHandler = require("../utils/asyncHandler");
const wishlistService = require("../services/wishlistService");

exports.addToWishlist = asyncHandler(async (req, res) => {
  const data = await wishlistService.addToWishlist(
    req.params.id,
    req.body.productId
  );
  return res.status(201).json({
    success: true,
    data,
    message: "Product added to wishlist",
  });
});

exports.removeFromWishlist = asyncHandler(async (req, res) => {
  const data = await wishlistService.removeFromWishlist(
    req.params.id,
    req.params.productId
  );
  return res.status(200).json({
    success: true,
    data,
    message: "Product removed from wishlist",
  });
});

exports.getAllwishlistItems = asyncHandler(async (req, res) => {
  const data = await wishlistService.getAllWishlistItems(req.params.id);
  return res.status(200).json({
    success: true,
    data,
    message: data.length ? "Wishlist items retrieved" : "Wishlist is empty",
  });
});
