const express = require('express')
const router = express.Router()
const boardController = require('./board.controller')

router.get('/list', boardController.list)

router.get('/write', boardController.write)

router.post('/write')