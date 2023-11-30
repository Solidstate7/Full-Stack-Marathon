import React from "react";
import { Body, Header } from "../components";

const Login = ({ login, setLogin }) => {
  return (
    <div>
      <Header name={"Login Page"}></Header>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logged in" : "Logged out"}
      </button>
      <Body path="/" pathName={"Main Page"}></Body>
    </div>
  );
};

export default Login;
