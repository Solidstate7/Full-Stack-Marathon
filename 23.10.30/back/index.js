const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { sequelize, Upload, UserData } = require("./lib/sequelize");
const jwt = require("./lib/jwt");
const authenticator = require("./middlewares/auth");
const cookieParser = require("cookie-parser");

const userUpload = multer();
const userSignIn = multer();

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, "./uploads");
        },
        filename: (req, file, done) => {
            const ext = path.extname(file.originalname);
            const filename =
                path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            done(null, filename);
        },
    }),
});

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("uploads"));

app.post(
    "/upload",
    authenticator.auth,
    upload.single("upload1"),
    async (req, res) => {
        // sequelize
        console.log("This is the user info when try to upload: ", req.user);
        await Upload.findOrCreate({
            where: { image: req.file.filename },
            defaults: {
                pw: req.user.pw,
                name: req.user.name,
                provider: req.user.provider,
                image: req.file.filename,
                original_filename: req.file.originalname,
            },
        });

        const { dataValues } = await Upload.findOne({
            where: {
                original_filename: req.file.originalname,
            },
        });

        console.log(dataValues);

        const dataBundle = { fileInfo: req.file, textInfo: req.body };
        res.send(dataBundle);
    }
);

app.post("/signup", userUpload.none(), async (req, res) => {
    console.log(req.body);
    const tempDTO = {
        id: req.body.id,
        name: req.body.name,
        pw: req.body.pw,
    };
    const result = await UserData.create(tempDTO);
    if (!result) res.json("User Data Creation failed.");
    res.send("Congratulations! You've signed up!");
});

app.post("/signin", userSignIn.none(), async (req, res, next) => {
    try {
        // console.log(req.body);
        const tempDTO = {
            id: req.body.id,
            pw: req.body.pw,
        };
        const { dataValues } = await UserData.findOne({
            where: {
                id: tempDTO.id,
                pw: tempDTO.pw,
            },
        });

        const token = jwt.sign(dataValues, "salt");
        // console.log(token);
        res.cookie("token", token);
        res.send("You've signed in.");
    } catch (e) {
        next(e);
    }
});

app.use((req, res, next) => {
    res.status(500).send("Internal Server Error");
});

app.listen(4000, async () => {
    await sequelize.sync({ force: true });
    console.log("back server start");
});
