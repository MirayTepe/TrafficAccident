const express =require ("express");
const asyncHandler =require("express-async-handler") ;
const { getUsers, getUserById, updateUser, deleteUser } =require("../controllers/user.js");

// Middleware for user authentication (you may need to implement this)
const authenticateUser =require("../middleware/validateTokenHandler.js");
const router = express.Router();

// Apply the authentication middleware to all routes in this router
router.use(authenticateUser);

//@desc Get all users
//@route GET /api/users
//@access private
router.get("/", asyncHandler(getUsers));

//@desc Get user by ID
//@route GET /api/users/:id
//@access private
router.get("/:id", asyncHandler(getUserById));

//@desc Update user
//@route PUT /api/users/:id
//@access private
router.put("/:id", asyncHandler(updateUser));

//@desc Delete user
//@route DELETE /api/users/:id
//@access private
router.delete("/:id", asyncHandler(deleteUser));

module.exports = router;
