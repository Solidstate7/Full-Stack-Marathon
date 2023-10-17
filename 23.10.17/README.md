## 용어

`Component`

1. 전체 컴포넌트 : App Component
    - Comment Component
        - Form
        - List

## 디렉토리 구조

-   core: 핵심 컴포넌트
-   src
    -   Component
    -   Content
    -   Pages

## Life Cycle

-   처리되는 과정
-   시점 파악이 중요하다.

## Dataset, Prop

```html
<div class="row" data-id="1"></div>
```

```js
document.querySelector(".row").dataset.id;
```

# Event

-   Render 되기 전에 Event Listener 적용 불가. (null)

# 신입에게 중요한 것

1. CRUD 이해
2. 가독성 -> formatting을 넘어서 언어적 이해도를 바탕으로 코드 구조를 잘 짤 수 있어야 한다.

# this context

-   addEvent method 안의 콜백 함수가 arrow function일 경우 this 주입이 안된다.
    -   수동 bind
