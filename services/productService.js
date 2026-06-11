const Product = require("../models/product.model");
const AppError = require("../utils/AppError");

async function getAllProducts() {
  const products = await Product.find();
  return products;
}

async function getProductById(productId) {
  const product = await Product.findById(productId);
  if (!product) {
    throw new AppError("Product not found", 404);
  }
  return product;
}

module.exports = { getAllProducts, getProductById };
