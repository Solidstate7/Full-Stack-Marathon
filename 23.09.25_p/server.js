const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const router = require('./src/index')
const pool = require('./pool')
const cookieParser = require('cookie-parser')
const middleware = require('./src/auth/auth.middleware')

app.set('view engine', 'html')
nunjucks.configure('views', {
  express: app,
})

app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(middleware.auth)

app.listen(3000, async () => {
  try {
    const connection = await pool.getConnection()
    console.log(`Connected to the database!`);
    connection.release()
  } catch (e) {
    console.log(`DB Connection ERROR`);
  }
})