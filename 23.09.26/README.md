# JWT

## HEADER

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

## PAYLOAD

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

## VERIFY SIGNATURE

```js
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),

  your - 256 - bit - secret
);
```

## base64 Encoding

base64url

```js

```

## 로그인

스키마(Schema) : 데이터 저장할 항목을 정의하기 위해.

1. 사용자가 아이디와 패스워드를 입력하면
   해당 내용을 검증한 뒤
   내용이 틀리면 틀리다고 안내해주고,
   맞으면 Access Token을 발급하자.

2. 메인 페이지 로그인 되지 않았으면 로그인 하세요
   로그인이 되어있으면 사용자의 이름 출력하기.

개발

1. Front-end forms
2. Router 설계

- GET / - main page
- GET /user/login - 로그인
- POST /user/login - 로그인

3. Controller

- src/user/user.controller.js
- get controller
- post controller

4. Service - postLogin

5. Repo - findOneByUserInfo(user_id, user_pw)

6. DB Schema

- database : login
  - table: users
    - field
      userid
      userpw

7. DB Connection

8. Repo 완성

쿠키는 어디서 만들어야 할까 -> Controller (응답 헤더)

JWT는 어디서 만들어야 할까 -> Service (로그인 성공 했을 때 생성)

Controller, Service, Repository 분류

작업 순서

Service JWT -> Controller에서 콘솔 확인

쿠키 생성 원리, redirect
cli -> ser
cli <- ser Set-cookie
redirect
Cli -> ser cookie
cli <- ser

쿠키 삭제 원리 Max-gae -> 0

로그인이 됐을 때 / 안 됐을 때 구분 -> Token 존재 여부

Token이 있을 때만 유저 정보를 조회한다.
없으면 유저 정보 X

token 있는지 없는지 판단가능?
만약에 있으면 token의 유효성 검사
db 요청, payload의 id 사용
req.user = db 요청한 모든 데이터

## AuthMiddleware

1. Token의 여부 확인
2. Token 유효성 검사
3. Payload의 id 꺼내오기
4. 해당 id로 DB에 요청
5. req.user 객체에 DB요청 결과값 생성

401 Unauthorized
403 Forbidden
