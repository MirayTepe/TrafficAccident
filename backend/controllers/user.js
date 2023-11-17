const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Get all users
//@route GET /api/users
//@access private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//@desc Get user by ID
//@route GET /api/users/:id
//@access private
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user);
});

//@desc Update user
//@route PUT /api/users/:id
//@access private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission to update other users");
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedUser);
});

//@desc Delete user
//@route DELETE /api/users/:id
//@access private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user.id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission to delete the user");
  }

  await User.deleteOne({ _id: req.params.id });
  res.status(200).json(user);
});

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
