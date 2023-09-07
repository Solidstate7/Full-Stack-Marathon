const SPACE = " "
const NEW_LINE = "\r\n"
const GUILLOTINE = NEW_LINE.repeat(2)
const START_LINE_NAMES = ["method", "uri", "version"]


const getHeaderEndIndex = (request) => request.indexOf(GUILLOTINE)

const getStartLine = (startLineString) => {
  startLineString.shift()
  .split(SPACE)
  .map((value,index) => {
    return [START_LINE_NAMES[index], value]
  })
  .reduce((acc, line) => {
    const [key, value] = line
    acc[key] = value
    return acc
  }, {})

  const queryStringEndIndex = startline.uri.indexOf("?")
  const isQuery = queryStringEndIndex !== -1
  if (isQuery) {
    const queryString = startline.slice(queryStringEndIndex)
  }
}

const getHeaders = (headerString) => {
  const headerLine = headerString.split(NEW_LINE)
  const startLineString = headerLine.shift()
  const startLine = getStartLine(startLineString)

  const headers = headerLine.reduce((acc, line) => {
    const [key, value] = line.split(": ")
    acc[key] = value
    console.log(key, value)
    return acc
  }, {})

  return {
    ...startLine,
    headers,
  }
}

// const getHeaderBuffer = (buffer) => buffer.slice(0, headerEndIndex)
// const getBodyBuffer = (buffer) => buffer.slice(headerEndIndex.length)

const getQuery = (queryString) => {
  if (queryString.length === 0) return null
  const query = queryString
  .split("&")
  .map(value => value.split("="))
  .reduce((acc, line) => {
    const [key,value] = line
    acc[key] = value
    return acc
  }, {})
  return query
}

const getRequest = (buffer) => {
  const headerEndIndex = getHeaderEndIndex(buffer)
  const isHeaderPending = headerEndIndex !== -1

  if (!isHeaderPending) return null
  const [headerString, ...bodyString] = buffer.toString().split(GUILLOTINE)
  const body = bodyString.join(GUILLOTINE)
  const headers = getHeaders(headerString)
  

  return {
    ...headers,
    body: getQuery(body)
  }
}

module.exports = getRequest