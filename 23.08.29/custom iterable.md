# Iterable

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        const done = i === 4;
        const value = done ? undefined : i++;
        return {
          value: "",
          done: done,
        };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iterator = iterable[Symbol.iterator]();
```
