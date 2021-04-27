const mongoose = require("mongoose");

const { Schema } = mongoose;

const wishlistSchema = new Schema(
  {
    by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
