const express = require("express");
const app = express();
const cors = require("cors");
const router = require("../src/route");

app.use(express.json());
app.use(cors());

app.use(router);

app.post("/users", (req, res, next) => {
    res.send("hello world");
});

module.exports = app;
