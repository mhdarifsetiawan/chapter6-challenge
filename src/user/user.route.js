const express = require("express");
const userController = require("./user.controller");
const userService = require("./user.service");
const userRouter = express.Router();

// API to get all users
userRouter.get("/users", userController.getAllUsers);

// API to get user by username
userRouter.get("/users/:username", userController.getUserByUserName);

// API to create new user
userRouter.post("/users", userController.createNewUser);

// API to update user/s
userRouter.put("/users/:id", userController.updateUser);

// API to delete user/s
userRouter.delete("/users/:id", userController.deleteUser);

module.exports = userRouter;
