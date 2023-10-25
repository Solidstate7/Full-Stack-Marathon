const UserController = require("./user.controller");
const http = require("node-mocks-http");

describe("create", () => {
    const service = {
        createUser: jest.fn(),
    };

    // let req = http.createRequest();
    // let res = http.createResponse();
    // let next = jest.fn();
    let req, res, next;
    const controller = new UserController(service);

    beforeEach(() => {
        req = http.createRequest();
        res = http.createResponse();
        next = jest.fn();
    });

    it("does it have create function?", () => {
        expect(typeof controller.create).toBe("function");
    });
    it("functions from service called?", async () => {
        req.body = { id: "web822", pw: "123", name: "sldfk" };
        await controller.create(req, res, next);
        expect(controller.service.createUser).toHaveBeenCalled();
        expect(controller.service.createUser).toHaveBeenCalledWith({
            id: "web822",
            pw: "123",
            name: "sldfk",
        });
    });
    it("valid response?", async () => {
        const response = Promise.resolve({ id: 1 });

        service.createUser.mockReturnValue(response);

        await controller.create(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
        expect(res._getJSONData()).toStrictEqual({ id: 1 });
    });
    it("exception handling done?", async () => {
        const err = { message: "error..." };
        service.createUser.mockReturnValue(Promise.reject(err));
        await controller.create(req, res, next);
        expect(next).toHaveBeenCalledWith(err);
    });
});
