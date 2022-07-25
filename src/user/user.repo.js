const { User_game } = require("../database/models");
const { Op } = require("sequelize");

// Get All Users
const getAllUsers = async () => {
  return await User_game.findAll();
};

// Get User by username
const getUserByUserName = async (userName) => {
  return await User_game.findOne({
    where: { username: userName },
  });
};

// Get User by Query
const getUsersByQuery = async (q) => {
  return await User_game.findAll({
    where: {
      [Op.or]: {
        username: {
          [Op.substring]: q,
        },
      },
    },
  });
};

// Create New User/s
const createNewUser = async (username, password) => {
  return await User_game.create({
    username: username,
    password: password,
  });
};

// Search User By username
const getUserByName = async (userName) => {
  return await User_game.findOne({
    where: { username: userName },
  });
};

// Get user by id
const getUserById = async (idUser) => {
  return await User_game.findOne({
    where: { id: idUser },
  });
};

// Update user
const updateUser = async (userId, username, password) => {
  return await User_game.update(
    {
      username,
      password,
    },
    {
      where: { id: userId },
      returning: true,
    }
  );
};

// Delete User
const deleteUser = async (userId) => {
  return await User_game.destroy({
    where: { id: userId },
  });
};

const userRepo = {
  getAllUsers,
  getUsersByQuery,
  getUserByUserName,
  createNewUser,
  getUserByName,
  getUserById,
  updateUser,
  deleteUser,
};

module.exports = userRepo;
