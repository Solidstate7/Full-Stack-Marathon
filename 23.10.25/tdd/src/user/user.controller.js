// module.exports = (service) => {
//     return {
//         create: () => {},
//     };
// };

// const service = require('./user.service')
// exports.create = () => {
//     service.createUser
// };

class UserController {
    constructor(service) {
        this.service = service;
    }

    async create(req, res, next) {
        try {
            const dto = req.body;
            const response = await this.service.createUser(dto);
            // console.log(response);
            this.service.createUser(req.body);
            res.status(201).json(response);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = UserController;
