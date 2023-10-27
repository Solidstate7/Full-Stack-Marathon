const express = require("express");
const app = express();
// const cors = require("cors");
const { sequelize, User } = require("./entity");
const jwt = require("./lib/jwt");

// app.use(cors());
app.use(express.json());
app.use("/token", async (req, res, next) => {
    console.log(req.body);
    const { nickname, profile_image, thumbnail_image } = req.body;
    const dto = {
        id: nickname,
        pw: profile_image,
        name: thumbnail_image,
    };

    const result = await User.findOrCreate({
        where: { id: dto.id },
        defaults: { pw: dto.pw, name: dto.name },
    });

    const tokenStr = jwt.sign(dto);

    res.send(tokenStr);
});
app.use((err, req, res, next) => {
    if (err.message === "Validation error") res.status(400).send("중복 발생");
    res.status(500).send(err.message);
});

module.exports = app;
