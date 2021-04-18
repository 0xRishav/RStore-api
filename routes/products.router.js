const express = require("express");
const faker = require("faker");
const productData = require("../data/productData");

const router = express.Router();

const products = productData.map((product) => {
  return {
    ...product,
    fastDelivery: true,
    freeShipping: true,
  };
});

// const products = [
//   {
//     name: faker.name.findName(),
//     price: faker.commerce.price(),
//   },
//   {
//     name: faker.name.findName(),
//     price: faker.commerce.price(),
//   },
//   {
//     name: faker.name.findName(),
//     price: faker.commerce.price(),
//   },
//   {
//     name: faker.name.findName(),
//     price: faker.commerce.price(),
//   },
// ];

router.route("/").get((req, res) => {
  return res.json({ products, success: true });
});

module.exports = router;
