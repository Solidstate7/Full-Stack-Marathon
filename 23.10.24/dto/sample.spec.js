// // 테스트 그룹화
// describe("Comments for describe", () => {
//     console.log("describe");
// });

// // 단위 테스트 메서드
// it("Comments for it", () => {
//     console.log("it");
// });
// test("Comments for the test", () => {
//     console.log("test");
// });

const UserController = require("../../23.10.25/tdd/src/user/user.controller");
// const service = require("./src/user/user.service");

describe("User Controller", () => {
    const mockFn = jest.fn();
    const service = {
        createUser: jest.fn(),
    };
    const controller = new UserController(service);

    it("create method", () => {
        expect(typeof controller.create).toBe("function");
    });

    it("mock function", () => {
        console.log(typeof mockFn);
        // mockFn("Argument");
        // mockFn("Argument");

        // expect(mockFn).toBeCalledWith("Argument");
        // expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it("create method에서 serivce.createuser가 호출되냐", () => {
        controller.create();
        expect(controller.service.createUser).toHaveBeenCalled();
    });
});
