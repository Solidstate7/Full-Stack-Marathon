const mysql = require('mysql2')
console.log(mysql);

const connection = mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'eunjae',
  password:'Qualia123!',
  database:'block10',
})


connection.connect((err) => {
  if (err) {
    console.log('error');
    return
  }
  console.log('Connected to MySQL')
  const sqlmsg = `insert into boards(title, content, writer) values('title2','content2','eunjae2')`
  connection.query(sqlmsg, (err, res) => {
    if (err) {
      console.log('Error query', err)
      return
    }
    console.log(res);
  })

  connection.end((err) => {
    if (err) {
      console.log("Error query", err);
      return
    }
    console.log('MySQL Connected');
  })
})