import React, { useState } from 'react'

import './style.css'
import { initBoard, fillOneCell, horizontal, vertical, gameOver } from '../../utils/board'
import { useEffect } from 'react';
const defaultBoard = initBoard();
const BUTTON_LEFT_CODE = 37;
const BUTTON_RIGHT_CODE = 39;
const BUTTON_UP_CODE = 38;
const BUTTON_DOWN_CODE = 40;

export default function Grid() {
    const [board, setBoard] = useState(defaultBoard)
    const [score, setScore] = useState(0)

    const reset = () => {
        const value = initBoard();
        setBoard(value)
    }

    const handleKeyDown = (e) => {
        let data = {row: null, score: 0};
        switch(e.keyCode) {
            case BUTTON_LEFT_CODE:
                data = horizontal(board, 'start');
                break;
            case BUTTON_RIGHT_CODE:
                data = horizontal(board, 'end');
                break;
            case BUTTON_UP_CODE:
                data = vertical(board, 'start');
                break;
            case BUTTON_DOWN_CODE:
                data = vertical(board, 'end');
                break;
            default: break;
        }

        if (data.row && !data.row.filter(el => !el).length) {
            alert('game over!!!')
            reset()
        }
        if (data.row && board.toString() !== data.row.toString()) {
            setBoard(fillOneCell(data.row))
            setScore(data.score + score)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [board])

    return (
        <div className="Grid__root">
            <button onClick={reset}>Reset</button>
            <div>Score: {score}</div>
            <div className="Grid__board">
                {board.map((el,inx) => (<div className="Grid__item" style={{
                    backgroundColor: `hsl(${56 + el*10}, 70%, 75%)`
                }}>{el || ''}</div>))}
            </div>
        </div>
    )
}
