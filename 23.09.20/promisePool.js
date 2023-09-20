const mysql = require('mysql2/promise')

const pool = mysql.createPool(
  {
    host:'127.0.0.1',
    port:'3306',
    user:'eunjae',
    password:'Qualia123!',
    database:'block10',
  }
)

module.exports = pool

// console.log(pool);

// ;(async () => {
//   try {
//     const [result, field] = await pool.query(`SELECT * FROM boards`)
//     // console.log(result, field); // [[result], [field]]
//   }
//   catch (e) {
//     throw new Error(`Error: ${e.message}`)
//   }
// })();
