const UserService = require("./user.service");
const UserController = require("./user.controller");
const { User } = require("../entity");

const userService = new UserService();
const userController = new UserController();
