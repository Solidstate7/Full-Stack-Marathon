import React, { useEffect, useState } from "react";
import User from "../components/RSP/User";
import { rock, scissors, paper } from "../images/RSP";
import Button from "../components/RSP/Button";
import Bet from "../components/RSP/Bet";

const rspBoardStyles = {
    transform: "scale(1.25)",
    padding: "100px 0",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    // border: "1px solid black",
};

const buttonStyles = {
    display: "flex",
    width: "200px",
    justifyContent: "space-evenly",
    padding: "10px 0",
};

const RSP = () => {
    const [yourMode, setYourMode] = useState(null);
    const [botMode, setBotMode] = useState(null);
    const [result, setResult] = useState({ str: null });
    const [round, setRound] = useState(0);
    const [yourGold, setYourGold] = useState(10000);
    const [botGold, setBotGold] = useState(10000);
    const [bet, setBet] = useState({
        isBet: false,
        amount: 0,
        isPressedOnce: false,
    });

    const init = () => {
        setYourMode(null);
        setBotMode(null);
        setResult({ str: null });
        setRound(0);
        setYourGold(10000);
        setBotGold(10000);
        setBet({ isBet: false, amount: 0 });
        console.log("Round Reset");
    };

    const mode = {
        rock: { name: "rock", imgPath: rock },
        scissors: { name: "scissors", imgPath: scissors },
        paper: { name: "paper", imgPath: paper },
    };

    const yourModeHandler = (_mode) => {
        setYourMode(mode[_mode]);
        botModeHandler();
    };

    const botModeHandler = () => {
        let modeList = Object.keys(mode);
        let random = Math.floor(Math.random() * modeList.length);
        setBotMode(mode[modeList[random]]);
    };

    const resultHandler = (mode_1, mode_2) => {
        if (mode_1 === mode_2) setResult({ str: "draw" });
        else if (mode_1 === "rock" && mode_2 === "scissors")
            setResult({ str: "win" });
        else if (mode_1 === "scissors" && mode_2 === "paper")
            setResult({ str: "win" });
        else if (mode_1 === "paper" && mode_2 === "rock")
            setResult({ str: "win" });
        else setResult({ str: "lose" });
    };

    const roundHandler = () => {
        if (round >= 0 && round <= 4) {
            setRound((round) => round + 1);
        } else return;
    };

    useEffect(() => {
        if (round === 5) {
            setTimeout(() => {
                init();
            }, 1000);
        }
    }, [round]);

    const betHandler = (gold) => {
        if (!bet.isBet) {
            setBet((prevState) => ({
                ...prevState,
                isBet: true,
                amount: gold,
            }));
        } else {
            setBet((prevState) => ({ ...prevState, isBet: false, amount: 0 }));
        }
    };

    useEffect(() => {
        console.log("betHandler Executed ", bet.amount, " Bet");
    }, [bet]);

    useEffect(() => {
        if (yourMode && botMode) {
            resultHandler(yourMode.name, botMode.name);
        }
    }, [yourMode, botMode]);

    useEffect(() => {
        if (result.str) {
            if (result.str === "win") {
                setBotGold((prevState) => prevState - bet.amount);
                setYourGold((prevState) => prevState + bet.amount);
            } else if (result.str === "lose") {
                setBotGold((prevState) => prevState + bet.amount);
                setYourGold((prevState) => prevState - bet.amount);
            }
            roundHandler();
        }
    }, [result]);
    /*since consecutive wins or losses as noted by string aren't captured by React, 
    include the state as object in the dependency array. */

    useEffect(() => {
        console.log(yourGold, botGold);
        if (yourGold <= 0 || botGold <= 0)
            setTimeout(() => {
                init();
            }, 500);
    }, [yourGold, botGold]);

    return (
        <div style={rspBoardStyles} className="rspBoard">
            RSP Round: {round}
            <User
                usertype={"You"}
                mode={yourMode}
                result={result.str}
                gold={yourGold}
                bet={bet}
            />
            <User
                usertype={"Bot"}
                mode={botMode}
                result={result.str}
                gold={botGold}
                bet={bet}
            />
            <div className="buttons" style={buttonStyles}>
                <Button
                    type={mode.rock.name}
                    handler={() => {
                        yourModeHandler(mode.rock.name);
                    }}
                ></Button>
                <Button
                    type={mode.scissors.name}
                    handler={() => {
                        yourModeHandler(mode.scissors.name);
                    }}
                ></Button>
                <Button
                    type={mode.paper.name}
                    handler={() => {
                        yourModeHandler(mode.paper.name);
                    }}
                ></Button>
            </div>
            <div style={buttonStyles} className="bets">
                <Bet
                    betAmount={3000}
                    handler={() => {
                        betHandler(3000);
                    }}
                ></Bet>
                <Bet
                    betAmount={5000}
                    handler={() => {
                        betHandler(5000);
                    }}
                ></Bet>
                <Bet
                    betAmount={10000}
                    handler={() => {
                        betHandler(10000);
                    }}
                ></Bet>
            </div>
        </div>
    );
};

export default RSP;
