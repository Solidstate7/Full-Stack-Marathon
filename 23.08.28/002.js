const fs = require("fs")

const fileName = "readme.md"
const filePath =  `${__dirname}/${fileName}`

fs.readFile(filePath, (err, data) => {
  if (err) throw err.toString()
  console.log(data.toString())
})

// 절대 경로
console.log(__dirname)

console.log(__filename)
