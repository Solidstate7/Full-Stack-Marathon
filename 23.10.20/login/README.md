# 프론트 엔드 구현

화면 응답 코드

# 백엔드 구현

DB와 MVC layer 없이 흐름만 보기

# 역사

ajax -> axios

블록체인 관련해서 공부할 때 기술 탄생 배경(역사) 공부
POW는 스팸 메일을 막는 로직에서 파생된 기술이다.

# 시스템 아키텍쳐

-   배포
    -   AWS 이전엔 배포를 어떻게 했을까?
        -   IDC

# 백엔드 구현 2

axios 내용
request method post, get

-   회원가입
-   로그인
-   사용자 프로필

-   front
    -   회원가입 화면
    -   로그인 화면
    -   프로필 화면
-   back

    -   회원가입 기능
    -   로그인 기능
    -   프로필 기능
        -   R
        -   U

-   users
    -   signup POST /users/signup
    -   signin POST /users/signin
    -   profile
        -   R : GET /users/:id
        -   R : GET /users/
        -   U : PUT /users/:id
    -   boards
        -   C
            -   POST /boards/write
                -> POST /boards
        -   R
            -   GET /boards/list
                -> GET /boards
            -   GET /boards/view/:id
                -> GET /boards/:id
        -   U
            -   POST /boards/update/:id
                -> PUT /boards/:id
        -   D
            -   /boards/delete/:id
                -> DELETE /boards/:id

## DB Schema

-   id varchar(30) primary key
-   pw varchar(100)
-   name varchar(30)

```sql
CREATE DATABASE test_db2;
USE test_db2;

CREATE TABLE users(
    id VARCHAR(30) NOT NULL,
    pw VARCHAR(100) NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);
```
