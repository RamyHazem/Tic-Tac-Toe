import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(""));

  let gameEnded = false;

  const checkWinner = (board) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        gameEnded = true;
        return board[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);

  return gameEnded ? (
    <div className="modal">
      <div className="modal-content">
        <h1 className="mb-5 text-4xl font-semibold">
          {winner !== "Tie" ? `The Winner is ${winner}` : `The Game was a Tie`}
        </h1>
        <button
          className="mt-5 text-2xl font-semibold "
          onClick={() => {
            gameEnded = false;
            setBoard(Array(9).fill(""));
          }}
        >
          Restart
        </button>
      </div>
    </div>
  ) : (
    <>
      <div className="game-board">
        {board.map((button, i) => (
          <div
            className="box"
            key={i}
            onClick={() => {
              const boardCopy = [...board];
              // Check if clicked
              if (winner || boardCopy[i]) return;
              boardCopy[i] = isXTurn ? "X" : "O";
              setBoard(boardCopy);
              setIsXTurn(!isXTurn);
            }}
          >
            {button}
          </div>
        ))}
      </div>
      <button
        className="mt-5 text-2xl font-semibold "
        onClick={() => {
          gameEnded = false;
          setBoard(Array(9).fill(""));
        }}
      >
        Restart
      </button>
    </>
  );
};

export default Board;
