const express = require("express");
const {authenticateUser} = require("../middleware/authenticateUser");
const checkRole  = require("../middleware/checkRole");
const {
    getUsers, 
    getUserByUserNameController, 
    register,
     login
  } = require('../controllers/userController');

const router = express.Router();

// Tüm kullanıcıları listeleme endpoint'i, sadece admin rolüne sahip kullanıcılar erişebilir
router.get("/", authenticateUser, checkRole(["admin"]),getUsers);

// Belirli bir kullanıcıyı getirme endpoint'i, sadece user veya admin rolüne sahip kullanıcılar erişebilir
router.get("/:username", authenticateUser, checkRole(["user", "admin"]),getUserByUserNameController);

// Kullanıcı kaydı endpoint'i, herkes erişebilir
router.post("/register",register);

// Kullanıcı girişi endpoint'i, herkes erişebilir
router.post("/login", login);

module.exports =router;
