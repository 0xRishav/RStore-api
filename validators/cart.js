const Joi = require("joi");

const addToCartSchema = Joi.object({
  productId: Joi.string().required(),
});

const changeQuantitySchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
});

function validate(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map((d) => d.message).join("; ");
      return res.status(400).json({ success: false, message: messages });
    }
    next();
  };
}

module.exports = {
  validateAddToCart: validate(addToCartSchema),
  validateChangeQuantity: validate(changeQuantitySchema),
};
