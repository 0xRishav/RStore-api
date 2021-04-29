const express = require("express");
const router = express.Router();

const userController = require("../controllers/User.controller");

router.post("/users/signup", userController.signUpUser);
router.post("/users/signin", userController.signInUser);

module.exports = router;
