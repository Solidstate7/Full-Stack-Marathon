import React from "react";

const rockStyles = {
  background: "#666",
  width: "60px",
  height: "20px",
  border: "none",
  borderRadius: "10px",
};
const scissorsStyles = {
  background: "#999",
  width: "60px",
  height: "20px",
  border: "none",
  borderRadius: "10px",
};
const paperStyles = {
  background: "#eee",
  width: "60px",
  height: "20px",
  border: "none",
  borderRadius: "10px",
};
const nullStyles = {
  background: "#D9D9D9",
  width: "60px",
  height: "20px",
  border: "none",
  borderRadius: "10px",
};

const Button = ({ type, handler }) => {
  return (
    <button
      style={
        type === "rock"
          ? rockStyles
          : type === "scissors"
          ? scissorsStyles
          : type === "paper"
          ? paperStyles
          : nullStyles
      }
      onClick={handler}
    >
      {type}
    </button>
  );
};

export default Button;
