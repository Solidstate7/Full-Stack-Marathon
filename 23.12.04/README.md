# React Custom Hook

    React로 개발할 때 자주 사용하는 기능을 Hook으로 작성해서 정리, 재사용.

# React Children Props

# React Hooks

    - react useMemo (children props로도 리렌더링 막을 수 있다.)
        - Memoization: 동일 연산 반복않고 메모리에 저장
        - 부모 컴포넌트가 리렌더링되면 자식 컴포넌트들도 모두 리렌더링 되는 것을 막는다.

        ```js
        const Memo = (n) => {
            return str(n)
        }
        // 피보나치 수열 반복 계산 비효율적

        let memo = {}

        const _Memo = (n) => {
            let result;
            if (n in memo) {
                result = memo[n]
            } else {
                result = str(n)
                memo[n] = result
            }
            return result
        }
        ```
    - react useContext
    - react useCallback
    - react useReducer
        - useState 대체 함수
        - 여러개 상태 구분지어 사용
        - 비동기 처리라도 가독성이 좋다

        1. state
        2. dispatch
        3. initialState
