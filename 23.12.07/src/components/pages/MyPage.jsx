import { useSelector } from "react-redux";

const MyPage = () => {
  const isLogin = useSelector((state) => state.isLogin);
  return <>{isLogin ? "loggedin" : "loggedout"}</>;
};

export default MyPage;
