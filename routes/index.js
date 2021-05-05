const express = require("express");
const app = express();
var cors = require("cors");
const router = express.Router();

app.use(cors());

const userController = require("../controllers/User.controller");
const productController = require("../controllers/Product.controller");
const cartController = require("../controllers/Cart.controller");
const wishlistConroller = require("../controllers/wishlist.controller");

// User routes
router.post("/users/signup", userController.signUpUser);
router.post("/users/signin", userController.signInUser);

// Product routes
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);

// Cart router
router.get("/cart/:id", cartController.getAllCartItems);
router.post("/cart/:id", cartController.addToCart);
router.delete("/cart/:id/products/:productId", cartController.removeFromCart);
router.put("/cart/:id/products/:productId", cartController.changeQuantity);

// Wishlist router
router.post("/wishlist/:id", wishlistConroller.addToWishlist);
router.delete(
  "/wishlist/:id/products/:productId",
  wishlistConroller.removeFromWishlist
);
router.get("/wishlist/:id", wishlistConroller.getAllwishlistItems);

module.exports = router;
