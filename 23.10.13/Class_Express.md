# Class

## 객체지향

모든 것을 CLass화하는 것은 힘들다.

```js
const controller = () => {
    getMain: (req, res) => {
        const result = service.getMain();
        res.send(result);
    };
};

const service = () => {
    getMain = () => {
        return "hello";
    };
};
```

Static Method의 문제점 -> 실행이 된 후 에러를 발견하므로 디버깅이 힘들다.

static method scope 안에서는 super가 되는데 super로 static method 접근은 안됨

상속을 했을 때는 instance가 여러 개 생성되지만
DI를 사용했을 때는 instance를 하나만 사용하여 메모리 효율을 올릴 수 있다.

## 의존성 주입 (DI)

-   자원을 효율적으로 사용하기 위해서
-   다중 상속과 유사한 효과를 내기 위해서
-   확장성을 높일 수 있다

## 역제어 (IOC)

## Overriding

-   다형성 : 부모(프로토타입 검증)
-   Prototype chaining 이해하기
-   Method Signature: name, the number and types of parameters, return type.

## Overloading

Javascript는 Overloading을 지원하지 않아서 직접 구현해야한다.
Typescript는 지원한다.

Express에서도 사용

```js
app.use(); // 매개변수 개수가 고정되어 있지 않다.

// 1. string (path)
// 2. handler function

app.use(string, handler);
app.use((req, res, next) => {
    req.user = `web7722`;
    next();
});

app.use("/");
```

동명 메서드에 매개변수의 개수와 타입을 다르게 했을 때 실행이 달라지는 것

## 클래스 추상화
