const Joi = require("joi");
const validate = require("../utils/validate.util");

const addToCartSchema = Joi.object({
  productId: Joi.string().required(),
});

const changeQuantitySchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = {
  validateAddToCart: validate(addToCartSchema),
  validateChangeQuantity: validate(changeQuantitySchema),
};
