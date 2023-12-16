const express = require("express");
const {authenticateUser} = require("../middleware/authenticateUser");
const {
  getAdmins, 
  getUserByAdminNameController, 
  register,
  login
  } = require('../controllers/adminController');

const router = express.Router();


router.get("/", authenticateUser,getAdmins);

router.get("/:adminname", authenticateUser,getUserByAdminNameController);

router.post("/register",register);

router.post("/login", login);

module.exports =router;
