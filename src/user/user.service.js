const userRepo = require("./user.repo");

const getUsers = async (q) => {
  if (q) {
    return await userRepo.getUsersByQuery(q);
  } else {
    return await userRepo.getAllUsers();
  }
};

const getUserByUserName = async (username) => {
  return await userRepo.getUserByUserName(username);
};

const createNewUser = async (username, password) => {
  const userExist = await userRepo.getUserByName(username);
  if (!userExist) {
    return await userRepo.createNewUser(username, password);
  } else {
    return "User is already registered";
  }
};

const updateUser = async (id, username, password) => {
  return await userRepo.updateUser(id, username, password);
};

const deleteUser = async (id) => {
  if (id != 1) {
    return await userRepo.deleteUser(id);
  } else {
    return "Delete is restricted for this user";
  }
};

const userService = {
  getUsers,
  getUserByUserName,
  createNewUser,
  updateUser,
  deleteUser,
};

module.exports = userService;
