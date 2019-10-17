import * as React from 'react';
import '../index.css';
import Square from "./square";

const Board: React.FunctionComponent = () => {
    const renderSquare = (i: number) => {
        return <Square />;
    };

    const status = 'Next player: X';

    return <div>
        <div className="status">{status}</div>
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
