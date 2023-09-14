const express = require("express")
const app = express()
const nunjucks = require("nunjucks")
const boardController = require("./board/controllers/board.controller")

const router = require("./routes/index")
const boardRouter = require("./routers/board.route")

// const router = express.Router()

const boards = []

app.set("view engine", "html")
nunjucks.configure("views", {express:app})

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use("/boards", boardRouter)

// router.get("/", (req, res) => {
//   res.render("index.html")
// })
// app.use("/boards", router)
// router는 path 정보만을 담고 있어서 실행은 app.use로 해야한다.

app.listen(3000, () => {
  console.log("Server Listening on Port 3000");
})
