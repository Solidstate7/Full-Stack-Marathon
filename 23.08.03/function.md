# This가 어려운 이유

Function의 역할이 너무 많기 때문

```js
function foo() {}

const foo = function () {};
// hoisting이 일어나냐 안나냐
```

```js
foo();
function foo() {
  console.log("hello");
}
// 작동, hoisting

foo();
const foo = function () {};
// 작동 안 됨
```

## 함수를 사용하는 3가지 방법

- 일반 함수로 사용
- 생성자 함수로 사용
- 객체 메서드 할당

### 일반 함수로 사용

```js
function foo(a, b) {
  console.log(this);
  // window 객체
  return [a, b];
}

const a = foo(1, 2);
console.log(a); // [1,2]
```

### 생성자 함수 사용

```js
function foo() {
  // this = {}
  console.log(this);
  // return this
}

const a = new foo();
```

#### new keyword 사용

```js
function foo() {
  this.id = "web7722";
}

const a = new foo();
console.log(a);
```

### 객체 메서드로 할당

```js
function foo(a, b) {
  console.log(this); // this가 무엇인가 -> method f
}

const bar = {
  method: foo,
};

bar.method(1, 2);
```

## this binding

function

ES6

### this binding이 무엇인가?

- bind
- call
- apply

```js
function foo(a, b) {
  // this = {id:"web7722"}
  console.log(this);
  // binding은 쓰지 않는 것이 효율적이다.
}

foo(1, 2);

const bar = foo.bind({ id: "web7722" });
// 함수 자체를 return 한다.
```

1. 함수 선언식을 쓰지 않는다. -> Arrow Function
2. 생성자 함수를 쓰지 않는다. -> Class syntax
3. 객체 메서드 할당을 쓰지 않는다. -> 객체 메서드

## ES6 일반함수 사용해보는 경험

```js
const foo = (a, b) => {
  console.log(this);
  return [a, b];
};

foo();
const c = new foo();
// foo is not a constructor.
```

es6가 arrow function을 만든 이유
단순히 함수를 선언하고 싶을 때 사용
arrow function엔 this binding 기능 자체가 없다.
