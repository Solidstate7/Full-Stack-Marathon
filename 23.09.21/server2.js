const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())
// router 배치 전 middleware 장착
// response 객체에 여러 method 추가

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.send("hello world")
})
app.get('/set-cookie', (req, res) => {
  // res.setHeader('Set-Cookie', 'name=ingoo')
  res.cookie('id', 'trees')
  res.send('cookie...')
})

app.listen(3000, () => {
  console.log('server start');
})