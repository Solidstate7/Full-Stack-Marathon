# AJAX

Asynchronous Javascript And XML

XML보다 JSON이 더 간결하다.

요청에 모든 데이터를 다 넘기는 것이 아니고 필요한 것만 넘긴다.

e.g. Google Maps - AJAX loading

jQuery !=== AJAX

라이브러리 안에 비동기 통신이 단순한 메서드로 추상화됨

```js
const xhr = new XMLHttpRequest();

xhr.open();
// 통신 시작
xhr.setRequestHeader();
// 요청 헤더
xhr.send();
// 요청 바디
xhr.onload = () => {};
```

회원 가입 아이디 중복 체크

자바스크립트만으로 요청을 보낼 수 있다.

## 비동기 통신

요청할 때 헤더 내용을 정의할 수 있다.
요청 바디 내용을 직접 넣을 수 있다. (그 전에는 input submit으로만 했었음)

댓글 + 비동기 통신

## Alternatives

-   jQuery로 AJAX (구식)
-   Promise Chaining 사용 -> Fetch Method
-   AXIOS

## Server 분리

-   Browser
-   Server A -> rendering
-   Server B -> data (DB)
