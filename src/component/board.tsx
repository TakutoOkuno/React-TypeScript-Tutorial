import {useState} from 'react';
import * as React from 'react';
import '../index.css';
import Square from "./square";

const Board: React.FunctionComponent = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const handleClick = (i: number) => {
        const newSquares = squares.slice();
        if (winner || squares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (i: number) => {
        return <Square
            value={squares[i]}
            onClick={() => handleClick(i)}/>;
    };

    const status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    const calculateWinner = (calcSquares: ReadonlyArray<string>) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const l of lines) {
            const [a, b, c] = l;
            if (calcSquares[a] && calcSquares[a] === calcSquares[b] && calcSquares[a] === calcSquares[c]) {
                return calcSquares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(squares);
    const winnerStatus = `Winner: ${winner}`;

    return <div>
        <div className="status">{winner ? winnerStatus : status}</div>
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
    </div>;
};

export default Board;
