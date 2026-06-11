const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const asyncHandler = require("../utils/async-handler.util");
const checkoutService = require("../services/checkout.service");
const { validateSignup, validateSignin } = require("../validators/auth.validator");
const { validateAddToCart, validateChangeQuantity } = require("../validators/cart.validator");

const userController = require("../controllers/user.controller");
const productController = require("../controllers/product.controller");
const cartController = require("../controllers/cart.controller");
const wishlistController = require("../controllers/wishlist.controller");

// User routes
router.post("/users/signup", validateSignup, userController.signUpUser);
router.post("/users/signin", validateSignin, userController.signInUser);

// Product routes
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);

// Cart router
router.get("/cart/total", auth, cartController.getCartTotal);
router.get("/cart", auth, cartController.getAllCartItems);
router.post("/cart", auth, validateAddToCart, cartController.addToCart);
router.delete("/cart/products/:productId", auth, cartController.removeFromCart);
router.put("/cart/products/:productId", auth, validateChangeQuantity, cartController.changeQuantity);

// Wishlist router
router.get("/wishlist", auth, wishlistController.getAllwishlistItems);
router.post("/wishlist", auth, wishlistController.addToWishlist);
router.delete("/wishlist/products/:productId", auth, wishlistController.removeFromWishlist);

// Checkout
router.post("/checkout", auth, asyncHandler(async (req, res) => {
  const data = await checkoutService.createOrder(req.user._id);
  res.json({ success: true, data, message: "Order created" });
}));

router.get("/health", (req, res) =>
  res.json({ success: true, message: "Server is running" })
);

module.exports = router;
