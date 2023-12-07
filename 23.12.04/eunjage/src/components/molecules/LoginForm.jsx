import React, { useRef, useEffect, useState } from "react";
import LoginInput from "../atoms/LoginInput";
import LoginLabel from "../atoms/LoginLabel";
import LoginButton from "../atoms/LoginButton";

const LoginForm = () => {
  const { SubmitData, setSubmitData } = useState(null);
  const selectInput = useRef();
  const LoginHandler = (e) => {
    e.preventDefault();
    // const resp = await axios.post("domain.com/", {some:"thing"}, {})
    const { uid, upw } = e.target;
    setSubmitData({ uid: uid.value, upw: upw.value });
    useEffect(() => {
      if (SubmitData) console.log(SubmitData);
    }, [SubmitData]);
  };
  return (
    <form onSubmit={LoginHandler}>
      <LoginLabel>ID</LoginLabel>
      <LoginInput name={"uid"} type={"text"}></LoginInput>
      <LoginLabel>PW</LoginLabel>
      <LoginInput name={"upw"} type={"password"}></LoginInput>
      <input value={"default value"} ref={selectInput} />
      <LoginButton>Login</LoginButton>
    </form>
  );
};

export default LoginForm;
