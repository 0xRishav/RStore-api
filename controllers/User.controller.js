const userDb = require("../models/user.model");

module.exports.signUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  let user = null;
  try {
    if (await userDb.findOne({ email: email })) {
      return res.status(208).json({
        success: false,
        message: "This email is already registered",
      });
    }
    if (
      name &&
      email &&
      new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email) &&
      password
    ) {
      user = {
        email: email,
        name: name,
        password: password,
      };
      userDb.create(user);
    } else {
      return res.status(400).json({
        success: false,
        message: "please enter valid email",
      });
    }
    if (user) {
      return res
        .status(200)
        .json({ success: true, message: "User added successfully", user });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(503)
      .json({ success: false, message: "internal server error" });
  }
};

module.exports.signInUser = async (req, res) => {
  const { email, password } = req.body;
  let user = null;
  try {
    if (
      email &&
      new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email) &&
      password
    ) {
      user = await userDb.findOne({ email: email });
      if (user) {
        if (user.password === password) {
          return res.status(200).json({
            success: true,
            message: "Sign In successfull",
            user
          });
        } else {
          return res.status(401).json({
            success: false,
            message: "Incorrect Password",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "User not found",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "email or password invalid",
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
