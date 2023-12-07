import LoginLayout from "../organisms/LoginLayout";
import MyPage from "./MyPage";

const Login = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <LoginLayout isLogin={isLogin} setIsLogin={setIsLogin}></LoginLayout>
      <MyPage isLogin={isLogin}></MyPage>
    </>
  );
};

export default Login;
