# TDD (Test-Driven-Development)

테스트 주도 개발

## TDD

-   Unit Test

    -   메서드 하나하나 테스트

    -   Router 실행

-   테스트 도구

    -   설치

    ```sh
    $ npm init -y
    $ npm i -D jest
    ```

    -   -D flag: 개발 전용 dependency
    -   Jest

        -   describe
        -   it/test
        -   expect
            ```js
            expect(typeof controller.create).toBe("function");
            ```
        -   matchers
            -   toBe
        -   mock 의존 모듈이 없을 때
            -   e.g. controller 완성 후 service가 없을 때
            -   가상의 함수나 변수를 만들어서 재현한다.
        -   entity 시뮬레이션(?)

-   Integration Test

# Kakao Login

# Chat

# Upload
