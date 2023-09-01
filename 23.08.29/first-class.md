# 일급 함수

`일급`의 의미

- 값으로 다룰 수 있고
- 변수에 담을 수 있고
- 함수 인자에 사용될 수 있고
- 함수 결과로 사용할 수 있다

`함수는 값이다.`

# 고차 함수

```js
const a = () => () => console.log("hello world");
```

```js
const apply1 = (f) => f(1);

const a = apply1((a) => a + 1);

console.log(a);
```

```js
const apply1 = (f) => f(1);
const add = (a) => a + 2;
const b = apply1(add);
```

```js
const addMaker = (a) => (b) => a + b;
addMaker(1)(2);

const sum10 = addMaker(10);
```
