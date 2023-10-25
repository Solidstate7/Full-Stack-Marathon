// Supertest

const request = require("supertest");
const app = require("../../app");

describe("통합테스트 userController", () => {
    const body = { id: "lee", name: "eunjae", password: "123" };
    it("POST /users", async () => {
        const response = await request(app)
            .post("/users")
            .set("Content-Type", "application/json")
            .send(body);
        expect(response.text).toBe("hello world");
    });
});
