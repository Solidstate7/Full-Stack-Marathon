const BaseDTO = require("../dto");

class UserCreateRequestDTO extends BaseDTO {
    userid;
    userpw;
    username;

    constructor(body) {
        super();
        this.userid = body.userid;
        this.userpw = body.userpw;
        this.username = body.username;
        this.validate(this);
    }
}
class UserCreateResponseDTO extends BaseDTO {
    userid;
    username;
    created_at;
    updated_at;

    constructor(body) {
        super();
        this.userid = body.id;
        this.username = body.name;
        this.created_at = body.createdAt.toLocaleString();
        this.updated_at = body.updatedAt.toLocaleString();
        this.validate(this);
    }
}

module.exports = {
    UserCreateRequestDTO,
    UserCreateResponseDTO,
};
