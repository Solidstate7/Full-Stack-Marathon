# 참조 타입

원시 타입

- string
- number
- boolean
- null
- undefined
- symbol

```js
const a = 1;
const b = "hello";
const c = true;

a = 2;
// error: a에 이미 상수로 할당

const d = {};
d.id = "web7722";
console.log(d);
//d에는 메모리 주소를 넣고, 옆에 별도로 메모리 할당
//object의 property도 별도 메모리 할당
console.log({} === {});
console.log(function () {} === function () {});
//false why? 객체를 생성하는 순간 메모리 주소가 별도로 할당
// 참조 타입은 const로 만든다.
// 객체, 함수, 어레이는 모두 참조 타입이다.
function web() {}

console.log(web);
```

// 함수를 값으로 사용하고 싶어서 -> 일급, functional programming

```js
let a = 10;
const b = a;

a = 11;

console.log(b);

//a를 즉시 평가하여 그 값을 넣어준다.
```

```js
//깊은 복사 vs 얕은 복사
const a = { name: "ingoo" };
const b = a;

b.name = "web7722"; //얕은 복사 -> 원본 훼손

console.log(a);
```

**깊은 복사**

```js
const a = { name: "ingoo" };
const b = { ...a };
//깊은 복사 -> 원본 보존
```
