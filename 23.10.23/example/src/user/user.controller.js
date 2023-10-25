const userService = require("./user.service");

exports.create = async (req, res, next) => {
    try {
        const signupDTO = req.body; // DTO check
        const userEntity = {
            id: signupDTO.userid,
            pw: signupDTO.userpw,
            name: signupDTO.username,
        };
        const { dataValues } = await userService.postSignup(userEntity);
        if (!dataValues) return res.send("User creation failed.");
        res.json(dataValues);
    } catch (e) {
        next(e);
    }
};

exports.findOne = async (req, res, next) => {
    try {
        // const signupDTO = req.body; // DTO check
        // const userEntity = {
        //     id: signupDTO.userid,
        //     pw: signupDTO.userpw,
        //     name: signupDTO.username,
        // };
        const userId = req.params.id;
        const response = await userService.getProfile(userId);
        if (!response) return res.status(400).send("Cannot find this user.");
        res.json(response);
    } catch (e) {
        next(e);
    }
};

exports.findAll = async (req, res, next) => {
    try {
        const response = await userService.getUserList();
        if (!response) return res.status(400).send("No contents are available");
        res.json(response);
    } catch (e) {
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const signupDTO = req.body; // DTO check
        const userEntity = {
            userid: signupDTO.userid,
            userpw: signupDTO.userpw,
            username: signupDTO.username,
        };
        const [response] = await userService.putProfile(userEntity, userId);
        if (!response) return res.status(400).send("Nothing is updated.");
        else return res.send("Updated.");
    } catch (e) {
        next(e);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const response = await userService.deleteUser(userId);
        console.log(response);
        if (!response) return res.status(400).send("Nothing is deleted.");
        else return res.send("Deleted.");
    } catch (e) {
        next(e);
    }
};
