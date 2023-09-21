const express = require('express')
const app = express()

app.use((req, res, next) => {
  if (!req.headers.cookie) return next()
  const cookies = req.headers.cookie
    .split('; ')
    .reduce((acc, data) => {
      const [key, value] = data
      acc[key] = value
      return acc
    },{})
  req.cookies = cookies
})

app.get('/', (req, res) => {
  res.send('No Cookies')
})

app.get('/cookie', (req, res) => {
  res.status(404)
  res.setHeader('name', 'eunjae')
  res.setHeader("Set-Cookie", "name=eunjae; id=trees; auth=completed")
  res.send('cookies...')
})

app.listen(3000, () => {
  console.log('server started')
})