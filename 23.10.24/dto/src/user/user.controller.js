const userService = require("./user.service");
const { UserCreateRequestDTO } = require("./user.dto");

exports.findAll = async (req, res, next) => {
    try {
        const response = await userService.getUsers();
    } catch (e) {
        next(e);
    }
};

exports.findOne = async (req, res, next) => {
    try {
        const response = await userService.getUserById();
    } catch (e) {
        next(e);
    }
};

exports.create = async (req, res, next) => {
    try {
        console.log(req.body);
        const userCreateRequestDTO = new UserCreateRequestDTO(req.body);
        const response = await userService.createUser(userCreateRequestDTO);
        res.status(201).json(response);
    } catch (e) {
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {
        const response = await userService.updateUserById();
    } catch (e) {
        next(e);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const response = await userService.deleteUserById();
    } catch (e) {
        next(e);
    }
};
