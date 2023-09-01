const fs = require("fs")
const path = require("path")

const fileName = "readme.md"
const filePath =  `${__dirname}/${fileName}`

fs.readFile(filePath, (err, data) => {
  if (err) throw err
  fs.writeFile(path.join(__dirname,"readme2.md"), data, (err) => {
    if (err) throw err
    console.log("파일 생성 성공!");
    fs.readFile(filePath, (err, data) => {
      if (err) throw err
      console.log("Overwritten: " + data.toString())
      console.log("THE END!")
    })
  })
})

