const fs = require("fs")
const writeStream = fs.createWriteStream("./readme2.md")

writeStream.on("finish", () => {
  console.log("Done.")
})

writeStream.write("파일 만들기")
writeStream.write("### 중분류")
writeStream.write("### 만들자")
writeStream.write("<br />")
writeStream.write("Hello world")
writeStream.end()
// 이 때 데이터 입력, 종료
