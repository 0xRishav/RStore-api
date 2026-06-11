const asyncHandler = require("../utils/asyncHandler");
const productService = require("../services/productService");

exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await productService.getAllProducts();
  return res.status(200).json({ success: true, products });
});

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.productId);
  return res.status(200).json({ success: true, product });
});
