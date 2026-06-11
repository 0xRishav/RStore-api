const asyncHandler = require("../utils/async-handler.util");
const productService = require("../services/product.service");

exports.getAllProducts = asyncHandler(async (req, res) => {
  const data = await productService.getAllProducts();
  return res.status(200).json({ success: true, data });
});

exports.getProductById = asyncHandler(async (req, res) => {
  const data = await productService.getProductById(req.params.productId);
  return res.status(200).json({ success: true, data });
});
