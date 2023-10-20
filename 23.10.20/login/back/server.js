const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./pool");
app.use(express.json());
app.use(cors());
const HttpException = require("./exceptions/http.exception");

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

// 회원가입
app.post("/users", async (req, res, next) => {
    try {
        console.log(req.body);
        const { userid, userpw, name } = req.body;
        // if (!userid || !userpw || !name) {
        //     throw new Error("입력한 정보가 없습니다.");
        // }

        const sql = `INSERT INTO users(id, pw, name) VALUES(?,?,?)`;
        const [{ affectedRows }] = await pool.query(sql, [
            userid,
            userpw,
            name,
        ]);
        if (!affectedRows)
            throw new HttpException("Insertion failed.", "aa", "500");
        const [[result]] = await pool.query(
            `SELECT id, name FROM users WHERE id=?`,
            [userid]
        );

        console.log(result);

        res.json({
            inserted: true,
            ...result,
        });
    } catch (e) {
        console.log(e.message);
        next(e);
    }
});

app.post("/login", (req, res) => {
    const { userid, userpw } = req.body;
    // sql
    if (userid === "admin" && userpw === "1234") {
        res.status(200).json({ result: "ok" });
    } else {
        res.status(400).json();
    }
    console.log(req.body);
    res.json({ result: "ok" });
});

// 회원 정보 리스트
app.get("/users", (req, res) => {
    res.json();
});

// 회원 정보 조회
app.get("/users/:id", (req, res) => {
    res.json();
});

// 회원 정보 업데이트
app.put("/users/:id", (req, res) => {
    res.json();
});

// 회원 정보 삭제
app.delete("/users/:id", (req, res) => {
    res.json;
});

// Error handling router
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json(err);
});

app.listen(4000, async () => {
    try {
        const connection = await pool.getConnection();
        console.log(`Connected to the database`);
        connection.release();
        console.log("back server start");
    } catch (e) {
        console.log(`DB Connection Error`);
    }
});
