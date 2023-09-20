# SQL

```sh
sudo mysql -uroot -p
```

```sql
show databases;
use mysql;
show tables;
select * from user;
select host,user from user;
```

## SQL 개요

- DDL: 데이터 정의어
- DML: 데이터 조작어
- DCL: 데이터 제어어

### 데이터 정의어

- CREATE
- SHOW
- DROP
- ALTER

### 데이터 조작어

- SELECT
- INSERT
- UPDATE
- DELETE

### 데이터 제어어

- GRANT
- REVOKE

```sql
create schema site;
show databases;
drop schema site;
create schema site;
```

data 생성 (entity의 멤버 변수들) => table로 바라본다 => column 정의

```sql
use site;
create table board(
  id INT,
  title VARCHAR(200),
  content TEXT,
  writer VARCHAR(20),
  created_at DATE,
  hit INT
);

desc board;
```

```js
class Board {
  id;
  title;
  content;
  writer;
  created_at;
  hit;
}
```

```sql
ALTER TABLE board RENAME TO boards;
```

```sql
insert into tablename(fieldname...) values(values...)

select * from boards;
select title,writer from boards;
SELECT * FROM boards WHERE id=2
```

```sql
UPDATE tablename SET field=value, field2=value2 ... WHERE condition
```

- 주의: 모든 데이터가 삭제될 수 있다.

```sql
DROP TABLE boards;
DELETE FROM tablename;
```

```sql
DELETE FROM boards WHERE id=1;
```

`boards` 테이블 생성
데이터 추가
2 rows
id 1 id 2
delete id=1

### AUTO_INCREMENT

`users`

```sql
CREATE TABLE users(
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY(id)
);

INSERT INTO users(name) values('aaa');
INSERT INTO users(name) values('bbb');
INSERT INTO users(name) values('ccc');
DELETE FROM users WHERE id=3;
INSERT INTO users(name) values('ccc');
```

```sql
CREATE TABLE boards(
  id INT AUTO_INCREMENT,
  title VARCHAR(200),
  content TEXT,
  writer VARCHAR(20),
  created_at DATETIME DEFAULT NOW(),
  hit INT DEFAULT 0,
  PRIMARY KEY(id)
);
```

```sql
CREATE TABLE boards(
  id INT AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  writer VARCHAR(20),
  created_at DATETIME DEFAULT NOW(),
  hit INT DEFAULT 0,
  PRIMARY KEY(id)
);
```

Entity (Class Field) -> Table Field
Repository -> SQL 문법 (select, update, delete...)

- findOne -> SELECT `fieldname` FROM `tablename`
- findAll -> SELECT \* FROM `tablename`
- create -> INSERT INTO `tablename`(fieldnames...) values(...)
- update -> UPDATE `tablename` SET field=value field2=value2... WHERE `condition`
- delete -> DELETE FROM `tablename` WHERE `condition`

```sql
SELECT FROM `tablenames` WHERE `condition` ORDER BY `fieldname` desc, asc
```

Web Server와 MySQL 간의 통신

- 필수 조건
  - HOST(IP + PORT)
  - USER INFO (Username + PW)
  - Protocol (TCP, SQL 통신 Library 사용)

### 연습

SHOW DATABASES

CREATE DATABASE/SCHEMA `database name`
DROP DATABASE/SCHEMA `database name`
USE `database name`
SELECT DATABASE();

```sql
CREATE TABLE boards(
  id INT AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  writer VARCHAR(20),
  created_at DATETIME DEFAULT NOW(),
  hit INT DEFAULT 0,
  PRIMARY KEY(id)
);
```

```sql
ALTER TABLE board RENAME TO boards;
```

SHOW TABLES

SELECT `fieldname` || `*` FROM `tablename`

DESC `tablename`

INSERT INTO `tablename`(fieldnames...) values(...)
DELETE FROM `tablename` WHERE `condition`
UPDATE `tablename` SET field=value field2=value2... WHERE `condition`

```sql
DROP TABLE boards;
DELETE FROM tablename;
```
