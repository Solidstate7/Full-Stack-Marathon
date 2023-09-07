const net = require("net")
const getRequest = require("./request.js")
const getResponse = require("./response.js")
const staticFile = require("./static.js")

const server = net.createServer()

server.on("connection", (socket) => {
  console.log("ESTABLISHED")

  let buffer = Buffer.alloc(0)
  socket.on("data", (chunk) => {
   buffer = Buffer.concat([buffer, chunk])
   const request = getRequest(buffer)
   const response = getResponse(socket)

   for (const path in staticFile) {
    console.log(path)
    if (request.uri === path) {
      response.sendFile(staticFile[path])
    }
   }

   console.log(request.uri)
    if (request.uri === "/") {
      response.sendFile("index.html")
  } else if(request.uri === "/html/list") {
    response.send("게시판 리스트입니다.")
   } else if (request.uri === "/html/write") {
    response.send("게시판 글쓰기입니다.")
   } else {
    response.notFound()
   }

   response.send(`Hello world ${request.query.name}`)
  })
})

server.listen(3000, () => {
  console.log("Server listening on port 3000");
})
// port -> 프로세스 특정하기 -> 중복 불가 destination