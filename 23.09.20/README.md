# DATABASE CONNECTION

```SQL
CREATE DATABASE block10
use block10

CREATE TABLE boards(
  id INT AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  writer VARCHAR(20) NOT NULL,
  created_at DATETIME DEFAULT NOW(),
  hit INT DEFAULT 0,
  PRIMARY KEY(id)
);
```

```sql
SHOW STATUS LIKE 'threads_connected';

CREATE USER 'eunjae'@'%' IDENTIFIED WITH mysql_native_password BY 'Qualia123!'

FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON *.* TO 'eunjae'@'%' WITH GRANT OPTION;
```

```sh
sudo apt install net-tools

sudo netstat -ntlp | grep mysqld

cd /etc/mysql/mysql.conf.d
```

## Source code

NodeJS 환경에서 DB SERVER CONNECTION -> `mysql2` module 사용

```sh
npm init -y
npm i mysql2
```

tcp handshake cost 비싸다 -> pool 사용

작업 순서: DB -> Web Server -> Browser

connection pool

# ConnectionPool 활용해서 리스트 만들어 보기

```sh
npm i express nunjucks
```
