const express = require("express");
const faker = require("faker");
const productData = require("../data/productData");

const router = express.Router();

const { Product } = require("../models");

// const products = productData.map((product) => {
//   return {
//     ...product,
//     fastDelivery: true,
//     freeShipping: true,
//   };
// });

router
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find({});
      res.json({ succes: true, products });
    } catch (err) {
      res
        .status(400)
        .json({ succes: false, message: "error finding products" });
    }
  })
  .post(async (req, res) => {
    try {
      const product = req.body;
      const newProduct = new Product(product);
      const savedProduct = await newProduct.save();
      res.json({ success: true, savedProduct });
    } catch (err) {
      res
        .status(400)
        .json({ success: false, message: "error saving product", err });
    }
  });

module.exports = router;
