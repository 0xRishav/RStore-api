const mongoose = require("mongoose");

const { Schema } = mongoose;

const wishlistSchema = new Schema(
  {
    wishlistItems: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
