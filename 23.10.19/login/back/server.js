const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
// app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
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

app.listen(4000, () => {
    console.log("backend server start");
});
