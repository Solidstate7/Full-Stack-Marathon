import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Login, MyPage, Shop, Detail } from "./pages";
// 로그인이 되어있지 않으면 접근 불가로 리다이렉트
function App() {
  // props로써 로그인 정보를 최상위 컴포넌트가 갖고 있어야함.
  const [login, setLogin] = useState(false);
  // 로그인 컴포넌트에서 setLogin 실행해서 부모 상태 바뀜
  const Redirect = () => {
    // 고차 컴포넌트 패턴
    // Navigate 사용해서 브라우저 요청 시 다른 경로로 요청하게 한다
    // My Page는 로그인이 돼야 들어가는 페이지
    if (login) return <MyPage login={login} />;
    return <Navigate to="/login" />;
    // login path로 다시 요청
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={<Login login={login} setLogin={setLogin} />}
        />
        <Route path="/mypage" element={<Redirect />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id/:num/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
