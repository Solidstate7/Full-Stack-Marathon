import LoginButton from "../atoms/LoginButton";

const LoginForm = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <label htmlFor="">ID</label>
      <input type="text" /> <br />
      <label htmlFor="">PW</label>
      <input type="password" /> <br />
      <LoginButton isLogin={isLogin} setIsLogin={setIsLogin}></LoginButton>
    </>
  );
};

export default LoginForm;
