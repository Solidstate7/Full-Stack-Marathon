import React from "react";
import { gameover } from "../../images/RSP/index";

const userBoardStyles = {
  padding: "20px 0",
  height: "150px",
};

const userInfoStyles = {
  width: "100px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
};

const User = ({ usertype, mode, result, gold, bet }) => {
  return (
    <div style={userBoardStyles} className="userBoard">
      <div style={userInfoStyles} className="userInfo">
        <div className="userType">{usertype}</div>
        <div className="userGold">{gold}G</div>
      </div>

      <img
        width="100px"
        height="100px"
        className="mode-img"
        src={mode ? mode.imgPath : gameover}
        alt=""
      />
      <div className="bet">Bet: {bet.amount}G</div>
      <div className="result">
        {!result
          ? ""
          : result === "draw" || usertype === "You"
          ? result
          : result === "win"
          ? "lose"
          : "win"}
      </div>
    </div>
  );
};

export default User;
