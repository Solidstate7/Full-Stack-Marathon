# Typescript

1. 타입스크립트 사용 이유
2. 문법
3. 노드 런타임환경 실행
4. tsconfig
5. build

## Typescript는 Javascript에서 타입의 정의가 추가된 언어다.

1. 자바스크립트는 브라우저 뿐만아니라 노드 환경에서 동작하는 범용성 있는 언어
2. 그러나 타입 추론이 불가능하므로
3. 모호한 타입에서 기원하는 오류 해결이 필요하다
4. OOP 특화
   - 클래스
   - 상속
   - 캡슐화
   - 다형성
   - 추상화

## 추상 클래스

1. 실체 (인스턴스)들의 공통 속성이나 메소드를 중심으로 미리 정의
   - 인스턴스들의 공통 속성이 아닌 것들을 쳐내고 압축한다.
   - 따라서 일반화된 객체를 생성하는 클래스
2. 더 구체적인 속성이나 메소드가 추가가 필요한 경우
   - 상속으로 다형성을 실현
   - 일반화된 객체에서부터 뻗어나간다.

## TS로 타입 검사와 추론 기능

- 토이 블록체인이라도 코드량이 많아져 오류가 빈번해지므로, 타입 검증이 필요하다.

## TS는 따로 런타임 환경이 없다

- 결국 자바스크립트로 컴파일된다.

## 가이드 역할

- 자바스크립트는 타입이 미정, 자동완성이 뜨지 않아 파악이 쉽지 않다
- 별칭을 정해서 작업 가능

## Installation

```sh
sudo npm i -g typescript
tsc -v
```

### Initialize TS Compiler

```sh
tsc --init
```

## 변수 타입 지정

```js
const msg2: string = "Message";
```

## 노드를 실행 환경으로

- ts-node를 사용하면 수동적으로 컴파일하지 않고 바로 실행할 수 있다.
- 메모리상 컴파일된 JS 코드를 노드 런타임환경에서 실행
- @types/node -> type definitions for node.js

```sh
npm i ts-node @types/node
npx ts-node [path]
```

## tsconfig.json

```json
{
  // 컴파일 진행 폴더 지정
  "include": ["./*"],
  // "./*" 현재 경로의 모든 파일
  // "./**/*" 현재 경로의 하위 폴더의 모든 파일

  // 컴파일 대상 제외
  "exclude": [],
  // 컴파일 옵션 속성
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["dom", "es2015"],
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@models/*": ["models/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```

## baseUrl, paths을 별칭으로 사용하여 컴파일하면 경로를 찾을 수 없다.

- tsc-alias package를 설치/사용해서 실제 경로 사용

```sh
npm i -D tsc-alias
```
