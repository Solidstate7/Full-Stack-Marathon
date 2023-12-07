import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100px;
  height: 60px;
  background-color: #4ba67c;
`;

const LoginButton = () => {
  //   const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);
  const loginHandler = () => {
    if (isLogin) dispatch({ type: "LOGOUT", payload: {} });
    else dispatch({ type: "LOGIN", payload: {} });
  };
  return (
    <ButtonStyle onClick={loginHandler}>
      {isLogin ? "Logout" : "Login"}
    </ButtonStyle>
  );
};

export default LoginButton;
