const express = require("express");
const {authenticateUser} = require("../middleware/authenticateUser");
const {
  getUsers, getUserByUserNameController, register, login
  } = require('../controllers/userController');

const router = express.Router();


router.get("/", getUsers);

router.get("/:username", getUserByUserNameController);

router.post("/register",register);

router.post("/login", login);

module.exports =router;
