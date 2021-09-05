require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const shortid = require("shortid");
const router = express.Router();
const Razorpay = require("razorpay");
const User = require("../models/user.model");
const Cart = require("../models/cart.model");

app.use(cors());

console.log("RAZORPAY_KEY", process.env.RAZORPAY_KEY);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_KEY,
});

const userController = require("../controllers/User.controller");
const productController = require("../controllers/Product.controller");
const cartController = require("../controllers/Cart.controller");
const wishlistConroller = require("../controllers/wishlist.controller");

// Order Route

async function getCartTotal(userId) {
  const user = await User.findById(userId);
  const cart = await Cart.findById(user.cart);
  if (cart) {
    const data = await cart.execPopulate({
      path: "cartItems",
      populate: { path: "product" },
    });

    const getTotalPriceReducer = (acc, product) => {
      return acc + product.product.price * product.quantity;
    };

    const cartTotal = data.cartItems.reduce(getTotalPriceReducer, 0);
    return cartTotal;
  }
}

router.post("/checkout", async (req, res) => {
  const userId = req.body.userId;
  const checkoutPrice = await getCartTotal(userId);

  const payment_capture = 1;
  const amount = checkoutPrice;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "failed to create payment please try again later" });
  }
});

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
