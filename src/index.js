import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setisX] = useState(true);

  const renderSquare = i => {
    return (
      <Square
        onClick={() => {
          if (squares[i] !== null) return;
          setSquares(() => {
            squares[i] = isX ? "X" : "O";
            return [...squares];
          });
          setisX(!isX);
        }}
        value={squares[i]}
      />
    );
  };

  return (
    <div>
      <div className="status">{`Next player: ${isX ? "X" : "O"}`}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

ReactDOM.render(<Game />, document.getElementById("root"));
