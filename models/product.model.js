const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  brand: {
    type: String,
    required: [true, "brand is required"],
  },
  image: {
    type: mongoose.Schema.Types.Array,
    required: [true, "image is required"],
  },
  about: {
    type: mongoose.Schema.Types.Array,
    required: [true, "about is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  rating: {
    type: Number,
    required: [true, "rating is required"],
  },
  fastDelivery: {
    type: Boolean,
    requird: [true, "fastDelivery is required"],
  },
  freeShipping: {
    type: Boolean,
    requird: [true, "freeShipping is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

