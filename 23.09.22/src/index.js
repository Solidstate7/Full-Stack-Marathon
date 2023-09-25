const express = require('express')
const router = express.Router()
const userRouter = require('./user/user.route')

router.get('/', (req, res) => {
  console.log(req.headers.cookie); // 'token=asdasdfasf; token2=asdff'
  console.log(req.cookies)
  res.render('index.html', {token: req.cookies.token})
})

router.use('/users', userRouter)

module.exports = router