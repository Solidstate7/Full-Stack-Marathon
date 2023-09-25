const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const router = require('./src/index')
const pool = require('./poolPromise')

app.set('view engine', 'html')
nunjucks.configure('views', {
  express: app,
})

app.use(router)

app.listen(3000, async () => {
  try {
    const connection = await pool.getConnection()
    console.log(`Connected to the DB`);
    connection.release()
  } catch (e) {
    console.log(`DB Connection ERROR`);
  }
  console.log("SERVER STARTED");
})
