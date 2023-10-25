const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/route");

app.use(cors());
app.use(express.json());
app.use(router);
app.use((err, req, res, next) => {
    if (err.message === "Validation error") res.status(400).send("중복 발생");
    res.status(500).send(err.message);
});

module.exports = app;
