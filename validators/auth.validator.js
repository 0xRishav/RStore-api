const Joi = require("joi");
const validate = require("../utils/validate.util");

const signupSchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).max(128).required(),
});

const signinSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  validateSignup: validate(signupSchema),
  validateSignin: validate(signinSchema),
};
