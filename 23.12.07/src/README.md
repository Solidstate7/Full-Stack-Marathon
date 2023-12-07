# Redux

- props drilling 해소
- store, action, reducer
- flux pattern - view action reducer

```sh
npm install redux-react redux
```

# React Global State Management

- Redux -> Recoil

# Recoil

- Meta에서 개발
- Unidirectional data flow
- Hook을 접한 개발자들이 사용하기 쉬움

# Lifting state

1. setState를 props로 전달
2. 힘들어서 전역

# Redux flux architecture

    Redux: store -> reducer -> action -> dispatch
    Boilerplate code

# Recoil

    Store 생성 -> 바로 호출

```sh
npm install recoil
```

# recoil usage

- recoil root settings

```js
import { RecoilRoot } from "recoil";
import { Login } from "./page/Login";

const App = () => {
  return (
    <RecoilRoot>
      <Login />
    </RecoilRoot>
  );
};
```

# Recoil Atom

- Atom은 State Root Component의 모든 자식 컴포넌트에서 상태 참조/업데이트 가능
- 리덕스의 스토어와 유사한 단위
- atom의 상태가 변경되면 atom을 참조하고 있던 컴포넌트들은 리렌더링 된다

```js
// store created
import { atom } from "recoil";

export const contentState = atom({
  key: "content", // unique identifier
  default: {
    name: "test",
    state: "testing...",
    message: "test msg",
  },
});
```

# recoil global state

```js
import { useRecoilState } from "recoil";
import { contentState } from "./recoil/atom";
const Login = () => {
  const [content, setContent] = useRecoilState();
};
const contentHandler = () => {
  setcontent({ ...content });
};
```

# recoil selector

```js
export const pagination = selector({
  key: "pagination",
  get: ({ get }) => {
    const { pageIndex } = get(contentState);
    const { data } = axios.get(`/post/list${page.index}`);
    return data.list;
  },

  set: ({ set }, newState) => {
    set(contentState, newState);
  },
});
```

# useRecoilValue

- Recoil state value return
- A hook used when a value is needed

# useSetRecoilState

# useRecoilState

# useResetRecoilState

etc...
