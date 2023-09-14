# router 나누기 샘플코드 시작

get /
get /boards/list
get /boards/write
get /boards/view
get /boards/modify

post /boards/write
post /boards/modify
post /boards/delete

get /users/login
get /users/join
post /users/login
post /users/join

# 디렉토리 구조 잡기

# 패키지 설치

```sh
npm init -y
npm install express
npm install nunjucks
```

##

글쓰기

```js
const boards = [];
```
