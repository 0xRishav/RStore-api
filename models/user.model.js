const mongoose = require("mongoose");
require("mongoose-type-email");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password can't be empty"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
