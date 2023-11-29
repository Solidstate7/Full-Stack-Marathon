import React from "react";

const betStyles = {
  background: "gold",
  width: "60px",
  height: "20px",
  border: "none",
  borderRadius: "10px",
};

const Bet = ({ betAmount, handler }) => {
  return (
    <button
      style={
        betAmount <= 3000
          ? betStyles
          : betAmount <= 5000
          ? { ...betStyles, background: "yellow" }
          : { ...betStyles, background: "red" }
      }
      onClick={handler}
    >
      {betAmount}
    </button>
  );
};

export default Bet;
