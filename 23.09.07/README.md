# Response Class 만들기

- Class 문법에 익숙해지자.

## Response Message

```sh
HTTP/1.1 200 OK
Connection: Close
Content-Type: text/html; charset=UTF-8
Content-Length: 30

<html>
  <head></head>
</html>
```

```js
// 큰 틀 string 만들고 시작
```

1. Response Message 만들기
2. 응답 주기

객체로 관리하고, 마지막에 string 내보내는 형식

```json
{
  "version": "HTTP/1.1",
  "statusCode": 200,
  "statusMessage": "OK",
  "headers": {
    "Connection": "Close"
  },
  "Connection": "Close",
  "body": "asdf"
}
```

## send vs sendFile

send: 매개변수에 있는 내용을 그대로 body에 담아서 보낸다
sendFile: 파일을 버퍼로 읽고, 바디로 만들어서 보낸다.

1. 파일 읽는 메서드
2. 읽은 파일의 내용을 response msg로 만듦

# readFile

경로와 파일명
