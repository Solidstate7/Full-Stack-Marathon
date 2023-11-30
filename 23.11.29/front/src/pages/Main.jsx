import React from "react";
import { Header, Body } from "../components";
const Main = () => {
  return (
    <div>
      <Header name={"Main Page"} />
      <Body path={"/shop"} pageName={"Merchandise"} login={false} />
      <Body path={"/login"} pageName={"Login"} login={false} />
      <Body path={"/mypage"} pageName={"My Page"} login={false} />
    </div>
  );
};

export default Main;
