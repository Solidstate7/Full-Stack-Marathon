const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.send('login')
})

router.get('/join', (req, res) => {
  res.send('join')
})

router.post('/login', (req, res) => {
  res.send('login')
})

router.post('/join', (req, res) => {
  res.send('join')
})

module.exports = router