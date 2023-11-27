# Babel

    - JS Code 변환을 도와준다.
    - 자바스크립트를 컴파일 해준다.
    - ES6 <--> ES5 변환

## Module System

### CommonJS

```js
const text = "Hi";
module.exports = { text };
```

```js
const { text } = require("a.js");
```

### ES6

```js
const text = "Hi";
const text2 = "hello";
export { text, text2 }; // 여러 개의 데이터를 내보내야 하는 경우

export default text; // 단일로 내보내는 경우
```

```js
import {text, text2} from "a.js"

impot myText from "a.js"
```

### Babel Installation

    - Babel consists of JS
    - NPM installation

```sh
npm install @babel/core @babel/cli @babel/preset-env
```

### Babel 환경 구성

### .babelrc 생성

### 설정 값 작성

```json
{
  "presets": ["@babel/preset-env"]
}
```

### babel 실행

```sh
npx babel ["변환할 파일 경로"] --out-file ["내보내는 파일명과 경로"]
```

### babel module system conversion ES5

```sh
npm i @babel/core @babel/cli @babel/plugin-transform-modules-commonjs
npx babel server.js --out-file dist/server.js
```

### JSX Syntax Transpilation

```sh
npm install @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

# Webpack

### Module Bundler

- 웹페이지를 그리는데 필요한 최소한의 파일만 갖고 컴파일, 로딩 속도 개선
- 모듈: 프로그램 구성요소
- 번들러: 의존성이 있는 모듈들을 파일로 묶어주는 도구 e.g. controller가 여러 개인 경우 여러 파일 하나로 묶어줌
- Node 환경에서 파일 뽑아주는 역할

## Webpack의 속성

1. entry: 시작 모듈
2. output: 내보내는 번들링 방법 결정, 번들링 파일 위치/이름
3. loaders: Babel Loader, CSS/JS load
4. plugins: 추가로 사용할 플러그인, e.g. 번들 최적화, 환경 변수, html 파일 생성

## Webpack 실행

```sh
  npm i webpack webpack-cli
  npx webpack
```

## style 설정

```sh
npm install webpack webpack-cli css-loader style-loader
```

## plugin 설정

```sh
  npm install webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin react react-dom
```

## react 설치 명령어

```sh
npx create-react-app "설치하는 폴더 이름"
```
