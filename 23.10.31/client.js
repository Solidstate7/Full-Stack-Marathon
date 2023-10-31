const WebSocket = require("ws");

const ws = new WebSocket("ws://127.0.0.1:8080");

ws.on("open", () => {
    console.log("connect");

    ws.send("test message");
});

ws.on("message", (chunk) => {
    console.log(chunk.toString());
});
