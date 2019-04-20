import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const isWinner = (squares, player) => {
    if (
        squares[0] === squares[1] &&
        squares[1] === squares[2] &&
        squares[2] !== null
    )
        return player;
    if (
        squares[3] === squares[4] &&
        squares[4] === squares[5] &&
        squares[5] !== null
    )
        return player;
    if (
        squares[6] === squares[7] &&
        squares[7] === squares[8] &&
        squares[8] !== null
    )
        return player;
    if (
        squares[0] === squares[4] &&
        squares[4] === squares[8] &&
        squares[8] !== null
    )
        return player;
    if (
        squares[2] === squares[4] &&
        squares[4] === squares[6] &&
        squares[6] !== null
    )
        return player;
    if (
        squares[0] === squares[3] &&
        squares[3] === squares[6] &&
        squares[6] !== null
    )
        return player;
    if (
        squares[1] === squares[4] &&
        squares[4] === squares[7] &&
        squares[7] !== null
    )
        return player;
    if (
        squares[2] === squares[5] &&
        squares[5] === squares[8] &&
        squares[8] !== null
    )
        return player;

    return null;
};

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
    const [winner, setIsWinner] = useState(null);

    const status = winner => {
        if (winner !== null) return `${winner} win this game !`;
        return null;
    };

    const renderSquare = i => {
        return (
            <Square
                onClick={() => {
                    if (squares[i] !== null || winner !== null) return;
                    setSquares(() => {
                        squares[i] = isX ? 'X' : 'O';
                        return [...squares];
                    });
                    setIsWinner(() => isWinner(squares, isX ? 'X' : 'O'));
                    setisX(!isX);
                }}
                value={squares[i]}
            />
        );
    };

    const reset = () => {
        setisX(isX);
        setIsWinner(null);
        setSquares(Array(9).fill(null));
    };
    return (
        <div>
            <div className="status">{`Next Player : ${isX ? 'X' : 'O'}`}</div>
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
            {winner ? <button onClick={() => reset()}>RESET</button> : null}
            <div className="status">{status(winner)}</div>
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
                <div className="status" />
                <ol>
                    History :<ul>Step 1 : </ul>
                </ol>
            </div>
        </div>
    );
};

ReactDOM.render(<Game />, document.getElementById('root'));
