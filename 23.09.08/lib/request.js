const SPACE = " "
const NEW_LINE = "\r\n"
const GUILLOTINE = NEW_LINE.repeat(2)
const START_LINE_NAMES = ["method", "uri", "version"]

class Request {
  headers = {}
  rawStartLine = ""
  rawHeaders = []

  constructor(buffer) {
    const [headerString, bodyString] = this.getRequestMessage(buffer)
    this.setRawHeaders(headerString)

    const startline = this.parseStartLine()
    this.headers = {...startline}

    this.parseHeaders()
    this.headers = {...this.headers, ...headers}
  }

  parseStartLine() {
    const startline = this.rawStartLine.split(SPACE)
    const mappingName = startline.map((value, index) => [START_LINE_NAMES[index], value])
    const obj = mappingName.reduce((acc, line) => {
      const [key, value] = line
      console.log(key, value);
      return acc
    }, {})

    return obj
  }

  parseHeaders() {
    const headers = this.rawHeaders.reduce((acc,raw) => {
      const [key,value] = raw.split(": ")
      acc[key] = value
      return acc
    })
    return headers
  }

  setRawHeaders(header) {
    const headerArr = header.split(NEW_LINE)
    this.rawStartLine = headerArr.shift()
    this.rawHeaders = headerArr
  }

  getRequestMessage(buffer) {
    const [header, ...rest] = buffer.toString().split(GUILLOTINE)
    const body = rest.join(GUILLOTINE)

    return [header, body]
  }
}

module.exports = Request