# 기본 설정

```sh
$ npm init -y
$ npm install express nunjucks
```

큰 기능이 추가되면 하나씩 확인해보자

# controller, service, repository, model or entity

Controller -> Service -> Repository -> Entity

board.route.js -> 라우팅
board.controller.js -> 요청, 응답
board.service.js -> 데이터 가공
board.repository.js -> 데이터 저장
board.entity.js -> 저장할 데이터의 규격

오류 잡기
repository error -> service error check -> controller error check
