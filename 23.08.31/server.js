const net = require("net")

const message = `HTTP/1.1 200 OK
Vary: Origin
Access-Control-Allow-Credentials: true
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Thu, 31 Aug 2023 02:09:17 GMT
ETag: W/"109-18a495a1d6c"
Date: Thu, 31 Aug 2023 02:10:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        Hello world!
    <!-- Code injected by live-server -->
<script>
   // <![CDATA[  <-- For SVG support
   if ('WebSocket' in window) {
      (function () {
         function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
               var elem = sheets[i];
               var parent = elem.parentElement || head;
               parent.removeChild(elem);
               var rel = elem.rel;
               if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                  var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                  elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
               }
               parent.appendChild(elem);
            }
         }
         var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
         var address = protocol + window.location.host + window.location.pathname + '/ws';
         var socket = new WebSocket(address);
         socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
         };
         if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
         }
      })();
   }
   else {
      console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
   }
   // ]]>
</script>
</body>
</html>
`

const START_LINE_NAMES = ["method", "path", "version"]
// ["GET", "/", "http/1.1"]

const server = net.createServer()

server.on("connection", (socket) => {
  console.log("ESTABLISHED")


  let buffer = Buffer.alloc(0)

  socket.on("data", (chunk) => {
   // 1. 먼저 header와 body 영역을 나누고 시작
   buffer = Buffer.concat([buffer, chunk])
   console.log(chunk.toString());

    const headerEndIndex = chunk.indexOf("\r\n\r\n")
    if (headerEndIndex !== -1) {
      const headerBuffer = chunk.slice(0, headerEndIndex)
      const bodyBuffer = chunk.slice(headerEndIndex + 4)
  
      const headerLine = headerBuffer.toString().split("\r\n")
      const startLine = headerLine
      .shift()
      .split(" ")
      .map((value,index) => {
        return [START_LINE_NAMES[index], value]
      })
      .reduce((acc, line) => {
        const [key, value] = line
        acc[key] = value
        return acc
      }, {})
      
      const headers = headerLine.reduce((acc, line) => {
        const [key, value] = line.split(": ")
        acc[key] = value
        console.log(key, value)
        return acc
      }, {})

      if (parseInt(headers["Content-Length"]) === bodyBuffer.length) {
         buffer = Buffer.alloc(0);
         socket.write(message);
         socket.end();
         console.log(startLine, headers, bodyBuffer.toString());
      }
  
      /*
      method: "GET",
      path: "/"
      version: "http/1.1"
      */
  
    } else {

    }
   //  socket.write(message)
   //  socket.end()
  })
})

server.listen(3000, () => {
  console.log("Server listening on port 3000");
})
// port -> 프로세스 특정하기 -> 중복 불가 destination