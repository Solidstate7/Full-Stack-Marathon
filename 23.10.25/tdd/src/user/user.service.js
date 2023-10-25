class UserService {
    constructor(entity) {
        this.entity = entity;
    }

    async createUser(dto) {
        try {
            const responseBody = await this.entity.create(dto);
            return responseBody;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}

module.exports = UserService;
