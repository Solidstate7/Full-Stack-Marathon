const fs = require("fs")

// console.log(fs)
// 1. path 2. options 3. callback

fs.readFile("./readme.md", (err, data) => {
  console.log(err.toString())
  console.log(data.toString())
})



console.log("THE END")