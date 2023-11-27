import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <Link to={"/game"}>To Game Page</Link>
      <Link to={"/game2"}>To Rock Scissors Paper</Link>
    </div>
  );
};

export default Main;
