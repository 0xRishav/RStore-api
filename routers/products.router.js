const express = require("express");
const faker = require("faker");

const router = express.Router();

const products = [
  {
    name: faker.name.findName(),
    price: faker.commerce.price(),
  },
  {
    name: faker.name.findName(),
    price: faker.commerce.price(),
  },
  {
    name: faker.name.findName(),
    price: faker.commerce.price(),
  },
  {
    name: faker.name.findName(),
    price: faker.commerce.price(),
  },
];

router.route("/").get((req, res) => {
  return res.json({ products, success: true });
});

module.exports = router;
