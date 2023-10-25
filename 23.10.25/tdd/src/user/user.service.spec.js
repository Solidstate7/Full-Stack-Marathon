const UserService = require("./user.service");

describe("User Service", () => {
    let userService = null;
    let User = {
        create: jest.fn(),
    };

    beforeEach(() => {
        userService = new UserService(User);
    });
    describe("createUser", () => {
        test("성공", async () => {
            // userService.createUser() return이 잘 되는가?
            // 매개변수에서 DTO 받는다.
            // DTO를 활용해서 Entity에서 User의 create 메서드를 호출한다.
            // 호출한 결과물을 가지고 return한다.

            User.create.mockResolvedValue({ id: "lee", name: "ingoo" });
            const dto = { id: "lee", pw: "1234", name: "eunjae" };
            const responseBody = await userService.createUser(dto);

            expect(User.create).toHaveBeenCalledWith(dto);
            expect(responseBody).toEqual({ id: "lee", name: "ingoo" });
        });

        test("실패", async () => {
            const dto = { id: "lee", pw: "1234", name: "eunjae" };
            await User.create.mockRejectedValue(new Error("User Error"));
            expect(
                async () => await userService.createUser(dto)
            ).rejects.toThrowError("User Error");
        });
    });
});
