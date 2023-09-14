const express = require("express")
const router = express.Router()

const boardRouter = require("./board.route")

router.get("/", (req, res) => {
  res.send('hello world')
})

router.use("/boards", boardRouter)

module.exports = router