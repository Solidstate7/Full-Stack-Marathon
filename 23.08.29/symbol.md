# Symbol

Symbol ES6에서 추가된 "원시 타입"

Symbol 안에 iterator가 존재한다.

```js
console.dir(Symbol);
const arr = [1, 2, 3];
arr[Symbol.iterator];
```

```js
arr[Symbol.iterator] = null;
for (const i of arr) {
  console.log(i);
}
```

for of는 iterator이 존재할 때 작동한다.
Map, Set data type
