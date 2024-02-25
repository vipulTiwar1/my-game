import { useState } from "react"
import Square from "./Square"

function Board(){

    const [board, setBoard] = useState(Array(9).fill(null));
    const [sign, setSign] = useState(true);

    // make a state which will take care of not playing, playing, ended
    const [isPlaying, setIsPlaying] = useState(0);

    function checkIfOver(newBoard){
        for(var i=0; i<3; i++){
            if(newBoard[i] && newBoard[i] === newBoard[i+3] && newBoard[i+3] === newBoard[i+6]){
                setIsPlaying(2);
            }
        }   
        for(i=0; i<7; i+=3){
            if(newBoard[i] && newBoard[i] != null && newBoard[i] === newBoard[i+1] && newBoard[i+1] === newBoard[i+2]){
                setIsPlaying(2);
            }
        }
        if(newBoard[0] && (newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8])){   
            setIsPlaying(2);
        }
        if(newBoard[2] && (newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6])){
            setIsPlaying(2);
        }
    }

    function handleBoard(i) {
        const newBoard = board.slice();
        if(isPlaying === 2 || newBoard[i]) return;
        if(sign)
            newBoard[i] = 'X';
        else 
            newBoard[i] = 'O';
        setSign(!sign);
        setBoard(newBoard);
        checkIfOver(newBoard);
    }
    return (
        <>
            <div className="board-row">
                <Square value = {board[0]} onMove = {() => handleBoard(0)} />
                <Square value = {board[1]} onMove = {() => handleBoard(1)} />
                <Square value = {board[2]} onMove = {() => handleBoard(2)} />
            </div>
            <div className="board-row">
                <Square value = {board[3]} onMove = {() => handleBoard(3)} />
                <Square value = {board[4]} onMove = {() => handleBoard(4)} />
                <Square value = {board[5]} onMove = {() => handleBoard(5)} />
            </div>
            <div className="board-row">
                <Square value = {board[6]} onMove = {() => handleBoard(6)} />
                <Square value = {board[7]} onMove = {() => handleBoard(7)} />
                <Square value = {board[8]} onMove = {() => handleBoard(8)} />
            </div>
        </>
    )
}

export default Board