const productDb = require("../models/product.model");

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await productDb.find();
    if (products) {
      return res.status(200).json({
        success: true,
        products,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Products not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

module.exports.getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await productDb.findById(productId);
    if (product) {
      return res.status(200).json({
        success: true,
        product,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
};
