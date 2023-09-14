const express = require('express')
const app = express()
const nunjucks = require("nunjucks")

// DB 역할 대체
const boards = []

app.set("view engine", "html")
nunjucks.configure("views", {
  express: app,
})

// routing -> public
// pathname -> images/img.jpg
app.use(express.static("public"))

// next 함수 기능이 내장돼있다.
app.use(
  express.urlencoded({extended:true})
  )
// middleware -> content-type 

// if (req.headers.uri === '/')
app.use((req, res, next) => {
  console.log("나 여기에 도착했음");
  next()
})

// if (req.headers.method === 'get' && req.headers.uri === '/') {res.setStatus(201)}
app.get('/', (req, res) => {
  // console.log(req.query.name);
  // const index = path.join(__dirname, "views", "index.html")
  // res.sendFile(index)
  res.render("index.html", {
    name: req.query.name,
    age: '33',
    id: 'web7722'
  })
  // {{name}} -> nunjucks syntax
})

app.get('/boards/list', (req, res) => {
  res.render("board/list.html")
})

app.get('/boards/write', (req, res) => {
  res.render("board/write.html")
})

app.get('/boards/view', (req, res) => {
  const row = boards[req.query.id]
  console.log(row);
  res.render("board/view.html", {
    title:row.titie,
    writer:row.writer,
    content: row.content,
  })
})

app.post('/boards/write', (req, res) => {
  boards.push(req.body)
  const id = boards.length -1
  res.redirect(`/boards/view?page=${id}`)
})

app.listen(3000, () => {
  console.log("server start");
})