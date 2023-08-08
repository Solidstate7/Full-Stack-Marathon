# Callback

아반떼 3초
소나타 2초
제네시스 1초

6초

비동기 코드를 동기처럼

```js
const 아반떼 = () => {
  setTimeout(() => {
    console.log("아반떼 go");
  }, 3000);
};
const 소나타 = () => {
  setTimeout(() => {
    console.log("소나타 go");
  }, 2000);
};
const 제네시스 = () => {
  setTimeout(() => {
    console.log("제네시스 go");
  }, 1000);
};

아반떼();
소나타();
제네시스();
// 비동기
```

```js
const 아반떼 = (callback) => {
  console.log("아반떼 시작");
  setTimeout(() => {
    console.log("아반떼 도착");
    callback();
  }, 3000);
};
const 소나타 = (callback) => {
  console.log("소나타 시작");

  setTimeout(() => {
    console.log("소나타 도착");
    // 아반떼();
    callback();
  }, 2000);
};
const 제네시스 = (callback) => {
  console.log("제네시스 시작");
  setTimeout(() => {
    console.log("제네시스 도착");
    callback();
  }, 1000);
};

제네시스(() => {
  소나타(() => {
    아반떼(() => {
      console.log("끝");
    });
  });
});
//익명함수로 감싸면 인자를 넣을 수 있다.
//시점 조작
```

```js
const a = (num) => {
  console.log("hello world", num);
};

const b = () => {
  a(1);
};

b();
```

```js
btn.addEventListener("click", () => {
  a(1);
});
```

## 프로미스 객체

콜백 지옥 극복

```js
/*{
  state: pending | fulfilled | rejected
  result: undefined | "resolve str" | "reject str"

  // method
  catch rejected일 때 호출
  finally
  then fulfilled일 떄 호출
}*/

// constructor의 argument = callback function
const pr = new Promise((resolve, reject) => {
  resolve("your life is fulfilled");
  reject("your life is rejected");
});

console.log(pr);
pr.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

console.dir(pr);
```

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 3000);
  });

아반떼.then((result) => {
  console.log(result);
});
```

```js
// Syntactic sugar

const arrow = (num) => {
  return num;
};
// const arrow = num => num;
```

### Promise chaining

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 1000);
  });

const 소나타 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("소나타 go");
    }, 2000);
  });
const 제네시스 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("제네시스 go");
    }, 3000);
  });

const Car = (name, time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${name} go`);
    }, time);
  });

아반떼()
  .then((result) => {
    console.log(result);
    return 소나타();
  })
  .then((result) => {
    console.log(result);
    return 제네시스();
  })
  .then((result) => {
    console.log(result);
    console.log("끝");
  });
// promise chaining
```

```js
const Car = async (name, time) => {
  return "hi";
};

console.log(Car("제네시스", 3000));
```

## Async/Await

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 1000);
  });

const 소나타 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("소나타 go");
    }, 2000);
  });
const 제네시스 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("제네시스 go");
    }, 3000);
  });

const Fn = async () => {
  let result = "hello world";
  return result;
};

Fn().then((data) => console.log(data));

아반떼().then(console.log);
소나타().then(console.log);
제네시스().then(console.log);

Promise.all([아반떼(), 소나타(), 제네시스()]);
pr.then((data) => {
  const 아반떼 = data[0];
  const 소나타 = data[1];
  const 제네시스 = data[2];
});

const init = async () => {
  const pr = await Promise.all([아반떼(), 소나타(), 제네시스()]);
  console.log(pr);
};

init();
```

```js
const init = async () => {
  console.log("1");
  const a = await 아반떼();
  console.log("2");
};
// await은 async 안에서만 작동하며, then과 같이 쓸 수 없다.
```

지금 쓸 일이 없는 이유

비동기 조작 코드 없음

네트워크

```js
const arr = [1, 2, 3];
// 배열 요소 삭제
// 내열 요소 변경

// filter
// map

arr.filter((value) => value % 2 === 0);
arr.map((value) => value * 2);
```
