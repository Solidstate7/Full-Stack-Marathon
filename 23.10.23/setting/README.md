# ORM

`Object-Relational Mapping`

-   데이터베이스: 테이블
-   웹 서버: 객체
-   두 개체를 맵핑

라이브러리

웹 서버 안에서 DB 조작하기 위한 라이브러리
`CRUD`

`추상화`

-   e.g. 컴포넌트 클래스 추상화

`테이블 추상화`

```js
const sql = `select * from boards`;
const [result] = pool.query(sql);
console.log(result);
```

테이블과 그것에 해당하는 객체를 관리하기 힘들다.

```js
class User {
    name;
    age;
    id;
}

const checkUser = (user) => {
    // if (typeof user.name !== 'string') {
    //     throw new Error()
    // }

    if (user instanceof User) {
        // code goes here
    }
};

const isUser = (user) => {};

checkUser(new User("1", "2", "3"));
```

OOP -> 클래스로 관리, 에러는 인스턴스가 생성된 지점에서 발생

```js
class Board {
    id;
    name;
    age;
}

const baord = new Board().select();
const sql = `select * from boards`;
const [result] = pool.query(sql);
console.log(result);
```

## Sequelize

1. JS의 대표적 ORM
2. TypeORM

Repository --> Sequelize 장착

## Settings

`Sequelize Setup` 웹 서버 없이 먼저 설정

1. 드라이버 설정 (DB 종류에 따라 다르다)
    - mysql2 for MySQL

```sh
$ npm install sequelize mysql2
```

-   connection(pool) info for Sequelize
    -   host
    -   username
    -   password
    -   database
    -   dialect(RDBMS type)
-   Sequelize의 DB Connection Code?

https://sequelize.org/docs/v6/getting-started/

```js
sequelize.sync();
sequelize.authenticate();
```

Class vs Function Sequelize Setup

## Backend server에 장착하기

## 관계형 데이터베이스 활용

-   1:1
-   1:N
-   N:M

## 카카오 로그인

## 채팅

## 파일 업로드
