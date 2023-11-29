import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ fontSize: "48px", transform: "translate(0, 200%)" }}>
      Main
      <br />
      <Link to={"/mine"}>Mine Sweeper</Link>
      <br />
      <Link to={"/rsp"}>Rock Scissors Paper</Link>
    </div>
  );
};

export default Main;
