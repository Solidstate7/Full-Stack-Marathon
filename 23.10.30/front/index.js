const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const jwt = require("./lib/jwt");
// const multer = require("multer");
// const path = require("path");
// const upload = multer({
//     storage: multer.diskStorage({
//         // middleware로 body 내용 읽고 실행
//         destination: (req, file, done) => {
//             done(null, "./uploads");
//         },
//         filename: (req, file, done) => {
//             // file이 req.file
//             // front server harddisk
//             // file 이름 중복 방지
//             const ext = path.extname(file.originalname); // .png
//             const filename =
//                 path.basename(file.originalname, ext) + "_" + Date.now() + ext; // extension removed, date add, reassembled
//             done(null, filename);
//         },
//     }),
// });

app.set("view engine", "html");
nunjucks.configure("views", { express: app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads"));

app.get("/", (req, res) => {
    console.log(req.cookies);
    const { token } = req.cookies;
    if (!token) return res.render("index");
    const verified = jwt.verify(token, "salt");
    console.log(verified);
    res.render("index", { ...verified });
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/signin", (req, res) => {
    res.render("signin");
});

app.get("/single", (req, res) => {
    res.render("single");
});

app.get("/array", (req, res) => {
    res.render("array");
});

// app.post("/single", upload.single("upload1"), (req, res) => {
//     console.log("User Info: ", req.user);
//     console.log("File Info: ", req.file);
//     console.log("Text Info: ", req.body);
//     // service
//     // DB 저장
//     // originalName, filename
//     res.send();
// });

app.listen(3000, () => {
    console.log("server start");
});
