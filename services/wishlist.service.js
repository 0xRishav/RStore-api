const Wishlist = require("../models/wishlist.model");
const User = require("../models/user.model");
const AppError = require("../utils/app-error.util");

async function getUserWishlist(userId) {
  const user = await User.findById(userId);
  if (!user) throw new AppError("User not found", 404);
  const wishlist = await Wishlist.findById(user.wishlist);
  return { user, wishlist };
}

async function populateWishlist(wishlist) {
  if (!wishlist) return [];
  const data = await wishlist.populate({ path: "wishlistItems" });
  return data.wishlistItems || [];
}

async function addToWishlist(userId, productId) {
  const { user, wishlist } = await getUserWishlist(userId);

  if (wishlist) {
    if (!wishlist.wishlistItems.some((p) => p == productId)) {
      wishlist.wishlistItems.push(productId);
      await wishlist.save();
    }
  } else {
    const newWishlist = await Wishlist.create({ by: userId });
    user.wishlist = newWishlist._id;
    await user.save();
    newWishlist.wishlistItems.push(productId);
    await newWishlist.save();
    const items = await populateWishlist(newWishlist);
    return items;
  }

  const items = await populateWishlist(wishlist);
  return items;
}

async function removeFromWishlist(userId, productId) {
  const { user, wishlist } = await getUserWishlist(userId);
  if (!wishlist) throw new AppError("Wishlist not found", 404);

  if (!wishlist.wishlistItems.some((p) => p == productId)) {
    throw new AppError("Invalid request", 400);
  }

  await wishlist.updateOne({ $pull: { wishlistItems: productId } });
  const updatedWishlist = await Wishlist.findById(user.wishlist);
  const items = await populateWishlist(updatedWishlist);
  return items;
}

async function getAllWishlistItems(userId) {
  const user = await User.findById(userId);
  if (!user) throw new AppError("User not found", 404);

  const wishlist = await Wishlist.findById(user.wishlist);
  if (!wishlist) return [];

  const items = await populateWishlist(wishlist);
  return items;
}

module.exports = { addToWishlist, removeFromWishlist, getAllWishlistItems };
