import React, { useState, useEffect } from "react";
import { Score } from "./Score";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  let isWinner = checkWinner();

  useEffect(() => {
    if (isWinner) {
      if (isWinner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
  }, [isWinner]);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  function allAreNull(arr) {
    let result = true;
    for (const value of state) {
      if (value !== null) {
        result = false;
        break;
      }
    }
    return result;
  }
  const handleErase=()=>{
    let fillOrNot=allAreNull(state);
    if(isWinner || !fillOrNot)
    {
      setState(Array(9).fill(null));
    }
  }

  return (
    <div className="board-container">
      <Score value={scores} />
      {isWinner ? (
        <>
          <h1>[{isWinner}] won the game </h1>
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h2>Player [{isXTurn ? "X" : "O"}], Please move</h2>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
          <button className="reset" onClick={handleErase}>Reset</button>
        </>
      )} 
    </div>
  );
};

export default Board;
