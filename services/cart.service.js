const Cart = require("../models/cart.model");
const User = require("../models/user.model");
const AppError = require("../utils/app-error.util");

async function getUserCart(userId) {
  const user = await User.findById(userId);
  if (!user) throw new AppError("User not found", 404);
  const cart = await Cart.findById(user.cart);
  return { user, cart };
}

async function populateCart(cart) {
  if (!cart) return [];
  const data = await cart.populate({
    path: "cartItems",
    populate: { path: "product" },
  });
  return data.cartItems || [];
}

async function addToCart(userId, productId) {
  const { user, cart } = await getUserCart(userId);

  if (cart) {
    if (!cart.cartItems.some((item) => item.product == productId)) {
      cart.cartItems.push({ product: productId, quantity: 1 });
      await cart.save();
    }
  } else {
    const newCart = await Cart.create({ by: userId });
    user.cart = newCart._id;
    await user.save();
    newCart.cartItems.push({ product: productId, quantity: 1 });
    await newCart.save();
    const items = await populateCart(newCart);
    return items;
  }

  const items = await populateCart(cart);
  return items;
}

async function removeFromCart(userId, productId) {
  const { user, cart } = await getUserCart(userId);
  if (!cart) throw new AppError("Cart not found", 404);

  if (!cart.cartItems.some((item) => item.product == productId)) {
    throw new AppError("Invalid request", 400);
  }

  await cart.updateOne({ $pull: { cartItems: { product: productId } } });
  const updatedCart = await Cart.findById(user.cart);
  const items = await populateCart(updatedCart);
  return items;
}

async function changeQuantity(userId, productId, quantity) {
  const { user, cart } = await getUserCart(userId);
  if (!cart) throw new AppError("Cart not found", 404);

  if (!cart.cartItems.some((item) => item.product == productId) || quantity <= 0) {
    throw new AppError("Invalid request", 400);
  }

  await Cart.updateOne(
    { _id: cart._id, "cartItems.product": productId },
    { $set: { "cartItems.$.quantity": quantity } }
  );

  const updatedCart = await Cart.findById(user.cart);
  const items = await populateCart(updatedCart);
  return items;
}

async function getAllCartItems(userId) {
  const user = await User.findById(userId);
  if (!user) throw new AppError("User not found", 404);

  const cart = await Cart.findById(user.cart);
  if (!cart) return [];

  const items = await populateCart(cart);
  return items;
}

async function getCartTotal(userId) {
  const user = await User.findById(userId);
  if (!user) return 0;
  const cart = await Cart.findById(user.cart);
  if (!cart) return 0;

  const data = await cart.populate({
    path: "cartItems",
    populate: { path: "product" },
  });

  const total = data.cartItems.reduce(
    (acc, item) => acc + (item.product?.price || 0) * item.quantity,
    0
  );
  return total;
}

module.exports = {
  addToCart,
  removeFromCart,
  changeQuantity,
  getAllCartItems,
  getCartTotal,
};
