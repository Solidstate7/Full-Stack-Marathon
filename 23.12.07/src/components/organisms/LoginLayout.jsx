import styled from "styled-components";
import LoginForm from "../molecules/LoginForm";
const LoginLayoutStyle = styled.div`
  padding: 30px;
  background-color: green;
`;

const LoginLayout = ({ isLogin, setIsLogin }) => {
  return (
    <LoginLayoutStyle>
      <LoginForm isLogin={isLogin} setIsLogin={setIsLogin}></LoginForm>
    </LoginLayoutStyle>
  );
};

export default LoginLayout;
