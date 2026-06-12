const Razorpay = require("razorpay");
const AppError = require("../utils/app-error.util");
const cartService = require("./cart.service");

let razorpay;
try {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });
} catch {
  console.log("Razorpay init failed. Check RAZORPAY_KEY/RAZORPAY_SECRET env vars.");
}

async function createOrder(userId) {
  if (!razorpay) {
    throw new AppError("Payment service not configured", 500);
  }

  const { nanoid } = require("nanoid");
  const amount = await cartService.getCartTotal(userId);

  if (amount <= 0) {
    throw new AppError("Cart is empty", 400);
  }

  const options = {
    amount: Math.round(amount * 100),
    currency: "INR",
    receipt: nanoid(),
    payment_capture: 1,
  };

  const response = await razorpay.orders.create(options);
  return {
    id: response.id,
    currency: response.currency,
    amount: response.amount,
  };
}

module.exports = { createOrder };
