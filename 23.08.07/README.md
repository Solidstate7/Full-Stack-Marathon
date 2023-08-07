# 런타임

`런타임` 실행

코드를 실행해주는 아이
컴퓨터 0, 1
메모리, CPU

메모리 <-- 데이터 저장
CPU <-- 연산

```js
const a = 3; // memory
const b = 2;
a + b; // CPU
// 서버 vs 브라우저 런타임 -> 디렉토리 접근 가능성 -> node.js, 해킹
```

그림 그릴 수 있는 수준
실체적 코드를 보고 추상적 그림을 그릴 수 있는 수준

Call Stack

```js
const a = 10;
// 평가 -> 변수/함수 선언문을 먼저 읽는다.
// 평가 먼저, 실행 나중
// 값을 넣기 전에 평가 해서 먼저 메모리 자리를 만들어 놓는다.
function fn() {
  console.log(c);
  let c = 10;
}
let b = fn();
console.log(a + b);

fn();
```

## 호이스팅

### TDZ(Temporal Dead Zone)

```js
function fn() {
  console.log(a);
  const a = 10; // 평가 먼저 -> scope 안에서 호이스팅(끌어 올려지냐)
}
```

## 실행

```js
const x = "x";
function c() {
  const y = "y";
  console.log("c", y);
}

function a() {
  const x = "xx";
  console.log("a", x);
  function b() {
    const z = "z";
    console.log("b", x);
    c();
  } b();
}

a();
c();

/*result:

// undefined는 초기화 직전의 값
// null은 빈 값
```

## 이벤트 루프

`비동기` 코드를 이해하기 위해 개념/그림

프로세스, 스레드

익스플로러 vs 크롬

프로그램 1개의 프로세스 생성
고유 프로세스 아이디

```js
function a() {
  a();
}

a();
// stackoverflow
```

비동기 -> multi thread
JS -> 조작 가능 call stack은 하나지만 실제로는 thread 2개

1. 빨래하고 정리
2. 편의점 가서 우유 사오기

explorer -> single-thread
chrome -> multi-thread -> 스레드 간에 데이터(변수) 공유 가능
프로세스 하나마다 스레드 하나를 갖는다

thread 2개

1. Call Stack
2. Web APIs

이벤트 루프가 필요한 이유

비동기
`1`
1초뒤 `2`
`3`

window 객체는 callstack에서 실행될 때 생성된다

```js
// 내장 객체
function init(window) {
  console.log("hello world!");
}

init({ setTimeout: () => {} });
// window.setTimeout, window.document -> window 생략
// global this -> window
```

```js
console.log(1);
window.setTimeout(() => {
  console.log(2);
  console.log(3);
}, 1000);
```

콜백 구분

1. 콜백 함수 형태 -> event loop 거치지 않는다.
2. event loop 들어갈 때

```js
window.setTimeout(() => {
  console.log(2);
  window.setTimeout(() => {
    console.log(3);
    window.setTimeout(() => {
      console.log(4);
    }, 4000);
  }, 2000);
}, 1000);
```

문제 1

```js
function inner() {
  console.log(3, this);
  const outer = () => {
    console.log(2, this);
    const hello = () => {
      console.log(4, this);
    };
    hello();
  };
  outer();
  return () => {
    console.log(1, this);
  };
}
const fn = inner.call({ name: "ingoo" });
fn();
```

문제 2

```js
const 아반뗴 = () => {
  console.log("아반떼 go");
};
const 소나타 = () => {
  console.log("소나타 go");
};
const 제네시스 = () => {
  console.log("제네시스 go");
};
```

자동차 경주
1초 뒤에 제네시스 go
2초 뒤에 소나타 go
3초 뒤에 아반떼 go
아반떼가 go가 되었으면 마지막에 끝이라는 출력도 되어야합니다.
