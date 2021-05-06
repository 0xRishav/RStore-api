const mongoose = require("mongoose");

const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    cartItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
