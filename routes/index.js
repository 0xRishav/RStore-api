const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const asyncHandler = require("../utils/asyncHandler");
const checkoutService = require("../services/checkoutService");
const { validateSignup, validateSignin } = require("../validators/auth");
const { validateAddToCart, validateChangeQuantity } = require("../validators/cart");

const userController = require("../controllers/User.controller");
const productController = require("../controllers/Product.controller");
const cartController = require("../controllers/Cart.controller");
const wishlistController = require("../controllers/wishlist.controller");

// User routes
router.post("/users/signup", validateSignup, userController.signUpUser);
router.post("/users/signin", validateSignin, userController.signInUser);

// Product routes
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);

// Cart router
router.get("/cart/:id", auth, cartController.getAllCartItems);
router.post("/cart/:id", auth, validateAddToCart, cartController.addToCart);
router.delete(
  "/cart/:id/products/:productId",
  auth,
  cartController.removeFromCart
);
router.put(
  "/cart/:id/products/:productId",
  auth,
  validateChangeQuantity,
  cartController.changeQuantity
);

// Wishlist router
router.post("/wishlist/:id", auth, wishlistController.addToWishlist);
router.delete(
  "/wishlist/:id/products/:productId",
  auth,
  wishlistController.removeFromWishlist
);
router.get("/wishlist/:id", auth, wishlistController.getAllwishlistItems);

// Checkout
router.post("/checkout", auth, asyncHandler(async (req, res) => {
  const userId = req.body.userId || req.user._id;
  const data = await checkoutService.createOrder(userId);
  res.json({ success: true, data, message: "Order created" });
}));

router.get("/health", (req, res) =>
  res.json({ success: true, message: "Server is running" })
);

module.exports = router;
