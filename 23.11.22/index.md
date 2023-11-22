# React

## 탄생 배경

## 프론트엔드 웹개발을 하다 보면 소리소문 없이 생겼다가 없어지는 라이브러리도 많고 갑자기 생태계가 활성화되는 라이브러리들도 많이 있다.

## 리액트는 프론트엔드 스택

### 리액트는 라이브러리다

## 프레임워크와 라이브러리의 차이

1. 프레임워크는
   - 폴더의 구성이 있고
2. 라이브러리
   - 폴더의 구성이 없다

# 프론트엔드 3대장

Angular Vue React

- JQuery를 사용하던 시절이 있었다.

  - 유지보수, 가독성의 질이 떨어진다

- 2006년 John Resig가 JQuery를 발표했고 DOM 다루는 방식이 무척 쉬웠다. (그냥 갖다쓰기)

- 초기 인기 SPA 사례: Google의 Gmail(Desktop Application처럼 동작)

  - Cross-browsing 가능한 JQuery가 표준이라는 말이 있는 시기가 있었다. (React의 등장으로 JQuery가 대체됐다.)

- Backbone, AngularJS를 사용한 SPA 환경을 구축했었지만 DOM조작에 JQuery를 사용했다.

- 페이지가 무거워지고 유지보수하기 힘들어진 배경에 React가 등장했다.

- 많은 플랫폼이 React를 사용 AirBnB, Netflix etc. -> 생태계가 커졌다.

# React

- SPA Web/App Dev
- View 중심 App

# Features

1. Flow of data -> One-way direction (The direction of tree is only downward)
   A -> B (O),
   B -> A (X)
   Vue나 Angular는 양방향 데이터 바인딩을 갖고 있는데, 규모가 커질수록 흐름 추적 어려워진다.
   따라서 단방향의 흐름을 갖는 React를 대규모 프로젝트에서 많이 사용한다.

2. Component structure

- UI의 단위
- 페이지 작성할 때 Component들을 조립해서 페이지를 만든다.
- UI 여러 개로 분할
- 재사용성

3. Virtual DOM

- DOM은 HTML/CSS 등 트리구조를 갖고 있다.
- 브라우저의 DOM이 변경되면 변경되는 동작보다는 후속 동작이 무거워서 비싸다.
- 가상 DOM은 리렌더링을 최소화한다.

4. Props and State

- Props: 부모 컴포넌트에서 자식 컴포넌트로 전달할 때, 함수 작성에서의 변수 정도
- State: Component 내부에 값을 선언하고 페이지가 동작하는 동안 유지되는 데이터
  - 사용자의 입력값을 저장하는 상태 변수

5. JSX

- React 문법
- JS-XML HTML과 유사한 코드 작성
- JSX는 Babel/Webpack로 transpiling을 통해서 JS로 변환해 사용한다.
- 초기 세팅이 필요하다. JSX 문법을 사용하면 가독성 좋게 개발 가능 (Webpack 중요 \*\*\*)
