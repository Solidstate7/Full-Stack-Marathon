const { UserCreateRequestDTO, UserCreateResponseDTO } = require("./user.dto");
const { User } = require("../entity");
exports.getUsers = async () => {
    try {
    } catch (e) {
        throw new Error("");
    }
};
exports.getUserById = async () => {
    try {
    } catch (e) {
        throw new Error("");
    }
};
exports.createUser = async (userCreateRequestDTO) => {
    try {
        if (!(userCreateRequestDTO instanceof UserCreateRequestDTO))
            throw new Error("The DTO is not an instace of a correct class.");
        const { userid, userpw, username } = userCreateRequestDTO;

        const user = User.build({
            id: userid,
            pw: userpw,
            name: username,
        });

        const response = await user.save();

        const result = new UserCreateResponseDTO(response);
        return result;
        // const response = await User.create(userCreateRequestDTO);
        // return response;
    } catch (e) {
        throw new Error(e.message);
    }
};
exports.updateUserById = async () => {
    try {
    } catch (e) {
        throw new Error("");
    }
};
exports.deleteUserById = async () => {
    try {
    } catch (e) {
        throw new Error("");
    }
};
