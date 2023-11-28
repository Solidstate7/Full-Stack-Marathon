import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <Link to={"/mine"}>Mine Sweeper</Link>
      <Link to={"/rsp"}>Rock Scissors Paper</Link>
    </div>
  );
};

export default Main;
