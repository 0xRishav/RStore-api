const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("../models/product.model");
const products = require("../data/productData");

async function seed() {
  await mongoose.connect(process.env.DB_URI);
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products`);
  await mongoose.connection.close();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
