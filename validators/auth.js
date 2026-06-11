const Joi = require("joi");

const signupSchema = Joi.object({
  name: Joi.string().trim().min(1).max(100).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(6).max(128).required(),
});

const signinSchema = Joi.object({
  email: Joi.string().trim().email().required(),
  password: Joi.string().required(),
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
  validateSignup: validate(signupSchema),
  validateSignin: validate(signinSchema),
};
