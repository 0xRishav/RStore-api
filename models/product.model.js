const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    brand: {
      type: String,
      required: [true, "brand is required"],
    },
    images: {
      type: [String],
      required: [true, "images is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    about: {
      type: [String],
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
    isInStock: {
      type: Boolean,
      default: true,
    },
    fastDelivery: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
