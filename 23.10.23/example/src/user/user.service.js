const { User: UserRepository } = require("../entity");

/*
    signupDTO {
        username:'',
        userid:'',
        userpw:'',
        
    }
*/

exports.postSignup = async (userEntity) => {
    console.log("post signup");
    const result = await UserRepository.create(userEntity);
    return result;
};
exports.getProfile = async (userId) => {
    const result = await UserRepository.findOne({
        raw: true,
        where: {
            id: userId,
        },
    });
    console.log("get profile");
    return result;
};
exports.getUserList = async () => {
    const result = await UserRepository.findAll({
        raw: true,
    });
    console.log("get userlist");
    return result;
};
exports.putProfile = async (userEntity, userId) => {
    const result = await UserRepository.update(
        {
            pw: userEntity.userpw,
            name: userEntity.username,
        },
        {
            where: {
                id: userId,
            },
        }
    );
    console.log("put profile");
    return result;
};
exports.deleteUser = async (userId) => {
    const result = await UserRepository.destroy({
        where: {
            id: userId,
        },
    });
    console.log("delete profile");
    return result;
};
