const fs = require("./005")

// readFile method가 인자 주입
fs.readFile("./readme2.md", (err, data) => {
  if (err) throw err
  console.log(data.toString())
})