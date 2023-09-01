const fs = require("fs")
const path = require('path')

const filePath = path.join(__dirname, "var")


fs.readFile(filePath, (err, data) => {
  if (err) throw err
  const result = data
  .toString()
  .split("\n")
  .filter((v) => v)
  .map((v) => v.split("="))
  .reduce((acc, v) => {
    const [key, value] = v
    acc[key] = value
    return acc
  } , {})
  console.log(result.host)
})

