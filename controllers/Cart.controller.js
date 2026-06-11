const cartdb = require("../models/cart.model");
const userdb = require("../models/user.model");

module.exports.addToCart = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;
  try {
    const user = await userdb.findById(id);
    let cart = await cartdb.findById(user.cart);
    if (cart) {
      if (!cart.cartItems.some(({ product }) => product == productId)) {
        cart.cartItems.push({
          product: productId,
          quantity: 1,
        });
        await cart.save();
      }
    } else {
      cart = await cartdb.create({
        by: id,
      });
      user.cart = cart._id;
      await user.save();
      cart.cartItems.push({
        product: productId,
        quantity: 1,
      });
      await cart.save();
    }
    const populatedCart = await cart.populate({
      path: "cartItems",
      populate: { path: "product" },
    });
    return res.status(201).json({
      success: true,
      data: [...populatedCart.cartItems],
      message: "Product added to cart",
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports.removeFromCart = async (req, res) => {
  const { id, productId } = req.params;
  try {
    const user = await userdb.findById(id);
    const cart = await cartdb.findById(user.cart);
    if (cart.cartItems.some(({ product }) => product == productId)) {
      await cart.updateOne({ $pull: { cartItems: { product: productId } } });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid request",
      });
    }
    const populatedCart = await cartdb.findById(user.cart).populate({
      path: "cartItems",
      populate: { path: "product" },
    });
    return res.status(201).json({
      success: true,
      data: [...populatedCart.cartItems],
      message: "Product removed from cart",
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      success: false,
      message: "internal server error",
    });
  }
};

module.exports.changeQuantity = async (req, res) => {
  const { id, productId } = req.params;
  const { quantity } = req.body;
  try {
    const user = await userdb.findById(id);
    const cart = await cartdb.findById(user.cart);
    if (
      cart.cartItems.some(({ product }) => product == productId) &&
      quantity > 0
    ) {
      await cart.updateOne({ $pull: { cartItems: { product: productId } } });
      cart.cartItems.push({
        product: productId,
        quantity: quantity,
      });
      await cart.save();
      const populatedCart = await cartdb.findById(user.cart).populate({
        path: "cartItems",
        populate: { path: "product" },
      });
      return res.status(201).json({
        success: true,
        data: [...populatedCart.cartItems],
        message: "Product quantity updated",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid request",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      success: false,
      message: "internal server error",
    });
  }
};

module.exports.getAllCartItems = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userdb.findById(id);
    const cart = await cartdb.findById(user.cart);
    if (cart) {
      const data = await cart.populate({
        path: "cartItems",
        populate: { path: "product" },
      });
      return res.status(200).json({
        success: true,
        data: [...data.cartItems],
        message: "Have some cartitems",
      });
    } else {
      return res.status(200).json({
        success: true,
        data: [],
        message: "Cart hasn't been created yet",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      success: false,
      message: "internal server error",
    });
  }
};
