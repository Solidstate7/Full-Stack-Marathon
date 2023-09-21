# Login

CRUD + LOGIN

- HTTP 특징
- TCP
- 비연결성
- PORT

# Request Header

`쿠키`
set-cookie

http 문제점인 비연결성 해결
연결이 끊겨도 쿠키를 보내준다면
ID 확인 가능 -> 보안 문제 (쿠키 탈취)

# Cookie

생성과 저장

쿠키는 브라우저/클라이언트에 저장된다.

로컬 스토리지 vs 쿠키 구분하기

`로컬 스토리지`

브라우저가 요청할 때마다 쿠키를 요청 헤더에 담아서 보내면, 서버는 응답 헤더에 Set-Cookie라는 이름으로 내용을 만들어서 응답을 줄 수 있다.

응답 받은 브라우저는 Set-Cookie라는 이름을 가진 `value`를 데이터로 저장한다.
