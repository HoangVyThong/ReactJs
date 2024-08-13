import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helpers";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      const nextState = JSON.parse(JSON.stringify(state));
      break;

    default:
      break;
  }
};

const Game = (props) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const handlerClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({ type: "CLICK", payload: { index } });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setState({ board: boardCopy, xIsNext: !state.xIsNext });
  };

  // const handlerResetGame = () => {
  //   setState({ board: Array(9).fill(null), xIsNext: true });
  // };
  return (
    <div>
      <Board cells={Array(9).fill(null)} onClick={handlerClick}></Board>
      {/* <button onClick={handlerResetGame}>Reset game</button> */}
    </div>
  );
};

export default Game;
