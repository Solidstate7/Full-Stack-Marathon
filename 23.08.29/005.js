const fs = require("fs")

class Fs {
  readFile(path, callback) {
    const readStream = fs.createReadStream(path, {highwaterMark: 8});
    const data = []
    readStream.on("data", (buffer) => {
      data.push(buffer)
      console.log("Reading Buffer...")
    })

    readStream.on("end", () => {
      callback(null, Buffer.concat(data))
      console.log("Done.")
    })

    readStream.on("error", (error) => {
      callback(error, null)
    })
  }
}

module.exports = new Fs()