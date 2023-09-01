// Buffer 쪼개기
// Stream 데이터의 흐름

const fs = require("fs")
const readStream = fs.createReadStream("./test.md", {highWaterMark: 16})

const data = []
readStream.on("data", chunk => {
  data.push(chunk)
  console.log(chunk)
});

readStream.on("end", () => {
  console.log(Buffer.concat(data).toString());
  console.log("Done.");
});

