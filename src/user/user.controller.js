const userService = require("./user.service");

const getAllUsers = async (req, res) => {
  const { q } = req.query;
  const users = await userService.getUsers(q);
  res.json(users);
};

const getUserByUserName = async (req, res) => {
  const { username } = req.params;
  const users = await userService.getUserByUserName(username);
  res.json(users);
};

const createNewUser = async (req, res) => {
  const { username, password } = req.body;
  const newUser = await userService.createNewUser(username, password);
  res.json(newUser);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const updateDataUser = await userService.updateUser(id, username, password);
  res.json(updateDataUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await userService.deleteUser(id);
  res.json(deleteUser);
};

const userController = {
  getAllUsers,
  getUserByUserName,
  createNewUser,
  updateUser,
  deleteUser,
};

module.exports = userController;
