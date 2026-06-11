const mongoose = require("mongoose");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      validate: {
        validator: (v) => validator.isEmail(v),
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: [true, "password can't be empty"],
    },
    wishlist: {
      type: Schema.Types.ObjectId,
      ref: "Wishlist",
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
