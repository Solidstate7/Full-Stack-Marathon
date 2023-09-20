const mysql = require('mysql2')

const pool = mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'eunjae',
  password:'Qualia123!',
  database:'block10',
})

pool.getConnection((error, connection) => {
  if (error) {
    console.log(`Error: ${error}`);
    return
  }
  console.log(`Connected to MySQL`);

  const sql = `SELECT * FROM boards`
  connection.query(sql, (error, result) => {
    connection.release()

    if(error) return

    console.log(result);
  })
})
