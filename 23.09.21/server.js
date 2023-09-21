const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views', {
  express: app,
})

app.use((req, res, next) => {
  console.log(req.headers.cookie);
  if (!req.headers.cookie) return next();
  const cookies = req.headers.cookie
    .split("; ")
    .reduce((acc, data) => {
      const [key, value] = data.split('=')
      acc[key] =value
      return acc
    },{})
  req.cookies = cookies
})

app.get('/', (req, res) => {

  res.render('index.html')
})

app.get('/cookie', (req, res) => {
  res.status(404)
  res.setHeader('name', 'eunjae')
  res.setHeader('Set-Cookie', 'name=eunjae')
  res.send('cookie')
})

app.listen(3000, () => {
  console.log('server started');
})