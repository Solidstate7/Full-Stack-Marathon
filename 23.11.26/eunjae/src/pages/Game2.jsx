import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { rock, scissors, paper } from "../images/RSP";

const Game2 = () => {
  const [playerSelect, setPlayerSelect] = useState(null);

  const [comSelect, setComSelect] = useState(null);

  const [result, setResult] = useState(null);
  // 가위바위보
  // 1. 두 명이 있어야 한다. (Player, Bot) (내용만 바꿔주면 되니 컴포넌트 재사용, 2개)
  // 2. 랜덤값
  // 3, 가위/바위/보 보여주기 (승패 검증)
  // 4. 플레이어 컴퓨터
  // - 무승부
  // - 승리: 가위,보 보,바위 바위,가위
  // - 패배: 보,가위 바위,보 가위,바위

  const select = {
    rock: { name: "Rock", imgPath: rock },
    scissors: { name: "Scissors", imgPath: scissors },
    paper: { name: "Paper", imgPath: paper },
  };

  const comSelectHandler = () => {
    let arr = Object.keys(select); // [rock, scissors, paper]
    console.log(arr);
    let comRandom = Math.floor(Math.random() * 3); // 0,1,2

    setComSelect(select[arr[comRandom]]);
  };

  const playerSelectHandler = (_select) => {
    console.log(select[_select]);
    setPlayerSelect(select[_select]);
    comSelectHandler();
  };

  // 부모 컴포넌트가 리렌더링되면 자식 컴포넌트는 모두 리렌더링된다.
  useEffect(() => {
    if (comSelect === null) return;
    resultHandler();
    // comSelect가 update될 때만
  }, [comSelect]);
  // win or lose
  const resultHandler = () => {
    if (playerSelect.name === comSelect.name) {
      setResult("Draw");
    } else if (playerSelect.name === "Rock" && comSelect.name === "Scissors") {
      setResult("Win");
    } else if (playerSelect.name === "Scissors" && comSelect.name === "Paper") {
      setResult("Win");
    } else if (playerSelect.name === "Paper" && comSelect.name === "Rock") {
      setResult("Win");
    } else setResult("Lose");
  };

  return (
    <div className="border">
      <Player name={"User"} select={playerSelect} result={result} />
      <Player name={"Computer"} select={comSelect} result={result} />
      <div>
        <button
          onClick={() => {
            playerSelectHandler("rock");
          }}
        >
          Rock
        </button>
        <button
          onClick={() => {
            playerSelectHandler("scissors");
          }}
        >
          Scissors
        </button>
        <button
          onClick={() => {
            playerSelectHandler("paper");
          }}
        >
          Paper
        </button>
      </div>
    </div>
  );
};

export default Game2;
