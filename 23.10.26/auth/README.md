# 카카오 로그인

OAuth 2.0 먼저 검색
`Kakao Developers`

e.g. 잡코리아 간편로그인

[카카오 로그인] 버튼

카카오 아이디 / 패스워드

OAuth 2.0

# 인가 코드 받기

GET https://kauth.kakao.com/oauth/authorize

쿼리 파라미터

client_id String 앱 REST API 키
[내 애플리케이션] > [앱 키]에서 확인 가능 O

redirect_uri String 인가 코드를 전달받을 서비스 서버의 URI
[내 애플리케이션] > [카카오 로그인] > [Redirect URI]에서 등록 O

response_type String code로 고정 O

```js
const REST_API_KEY = "a674d5e67f0266bc7d9a50b6c66ce9cd";
const redirectURI = "http://localhost:3000/auth/kakao/callback";
const kakaoURI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${redirectURI}&response_type=code`;
```

client id -> redirect_uri -> response_type=code -> 카카오 로그인 화면 -> 인가 코드 발급

# 토큰 발급

axios 요청 (NodeJS에서는 plain JS와 달리 net 모듈을 사용하여 요청)

# 토큰 검증

GET https://kapi.kakao.com/v1/user/access_token_info 액세스 토큰

# 요청 헤더

```
GET / HTTP/1.1
...
Authorization:Bearer [JWT Token]

```

토큰으로 사용자 정보 조회하는 미들웨어 장착
