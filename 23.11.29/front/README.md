# React Router Hook

    React의 페이지는 URL 요청에 따라 페이지 전환 이벤트를 막고 지정된 컴포넌트를 보여주는 것
        - params or querystrings
        - SPA, 검색 시 상태값이 URL 형태로 저장된다
        - e.g. (/:shop:/type:/option)
        - e.g. (/search?id=3&option=5)

# React styled components (CSS in JS)

# React Design patterns

## Atomic

    컴포넌트의 재사용성을 극대화시킨 것


    구조를 잘못짜면 복잡해지고 유지보수가 어려워진다
     - 상태변수 관리가 어렵다.
     - 최하위 자식 컴포넌트 까지 도달하는 Props Drilling을 피해야한다.

    원자 -> 분자 -> 유기체 -> 템플릿 -> 페이지 단계를 거쳐 거시 컴포넌트로 규모가 커진다.

    1. 원자 : 가장 최소의 단위 컴포넌트 제작
    e.g. button, text

    2. 분자 : 원자 단위 집합
    e.g. input form

    3. 유기체 : 분자와 원자 단위 집합
    e.g. header, footer

    4. 템플릿 : 유기체가 모인 레이아웃
    e.g. 컨텐츠 동작 요소

    5. 페이지 : 동적 생성 데이터의 최종본

# React Custom Hook

# 과제

DB Express 로그인 기능 (+ 상품 페이지까지)

mypage 접근하려면 로그인돼있어야 함

카테고리 (햄버거 메뉴, 네비게이션 바)

mypage 들어갔을 때 유저의 정보 표시

express 리액트 빌드된 index.html
express 로그인 정보 요청받는 서버
