require("dotenv").config()
const net = require("net")
const Request =  require("./lib/request")
const Response = require("./lib/response")

const {SERVER_PORT, NODE_ENV} = process.env
const PORT = SERVER_PORT || 3000

const server = net.createServer()

server.on("connection", (socket) => {
  console.log("ESTABLISHED")
  socket.on("data", (chunk) => {
    const req = new Request(chunk)
    const res = new Response(socket)
    res.setHeaders("Set-Cookie", "token=1234;").send("hello world!")

    res.sendFile("index.html")

    //CRUD
    // / -> index.html
    // /board/list-> list, view, write
    // /board/write -> write.html
    // ...
  })
})

server.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`)
})