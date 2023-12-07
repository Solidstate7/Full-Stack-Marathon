import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Count = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);
  const incrementHandler = () => {
    dispatch({ type: "value", payload: { count: 2 } });
  };
  const decrementHandler = () => {
    dispatch({ type: "value2", payload: { count: 2 } });
  };
  return (
    <div>
      {isLogin ? "logged in" : "logged out"}
      <button onClick={incrementHandler}>increment, Login</button>
      <button onClick={decrementHandler}>decrement, Logout</button>
    </div>
  );
};

export default Count;
