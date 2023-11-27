import React from "react";

const Player = ({ name, select, result }) => {
  let temp = ""; // 상태변수가 아니기에 리렌더링이 되면 초기화된다. 반면 상태변수는 이전값을 보존하고 있다.

  if (name === "User") {
    temp = result;
  } else {
    temp = result === "Draw" ? "Draw" : result === "Win" ? "Lose" : "Win";
  }

  return (
    <div className="player">
      <div className="name">{name}</div>
      <img className="select-img" src={select && select.imgPath} alt="" />
      <div className="result">{temp}</div>
    </div>
  );
};

export default Player;
