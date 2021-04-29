const express = require("express");
const router = express.Router();

const userController = require("../controllers/User.controller");
const productController = require("../controllers/Product.controller");

// User routes
router.post("/users/signup", userController.signUpUser);
router.post("/users/signin", userController.signInUser);

// Product routes
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);

module.exports = router;
