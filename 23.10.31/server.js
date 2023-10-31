const WebSocket = require("ws");
const app = require("./app");

let sockets = [];

const wss = new WebSocket.Server({
    server: app.listen(3000, () => {
        console.log("server start");
    }),
});

wss.on("connection", (ws, req) => {
    console.log("Browser has been connected.");

    sockets.push(ws);

    ws.on("message", (chunk) => {
        // chunk {type:'message', data:'asdfasdf'}
        // chunk {type:'to', data:'whisper'}

        // conditionals 까다롭다 -> type: 메세지, 귓속말

        // socket.io 사용
        // uri path로 group 구분

        for (const client of sockets) {
            if (client === ws) continue;
            client.send(chunk.toString());
        }
    });

    ws.on("close", () => {
        sockets = sockets.filter((v) => v !== ws);
        console.log("connection terminated.");
    });
});
