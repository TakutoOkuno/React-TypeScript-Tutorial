import * as React from "react";
import '../index.css';

interface Props {
    value: number | 'X';
    onClick: () => void;
}

const Square: React.FunctionComponent<Props> = (p: Props) => {

    return <button className="square" onClick={p.onClick}>
        {p.value}
    </button>
};

export default Square;
