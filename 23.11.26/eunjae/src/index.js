import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 여러 개 페이지
// 하위 컴포넌트들이 합쳐진 페이지 컴포넌트로 구성, 자바스크립트로 변환해서 보여준다.
// URL이 변경되면 새로고침을 막고 내용물(페이지)가 변경돼야 한다.
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
