import { useState } from "react"
import Square from "./Square"

function Board(){

    const [board, setBoard] = useState(Array(9).fill(null));
    const [sign, setSign] = useState(true);

    // make a state which will take care of not playing, playing, ended
    const [isPlaying, setIsPlaying] = useState(0);

    function checkIfOver(){
        for(let i=0; i<3; i++){
            if(board[i] === board[i+3] === board[i+6]){
                setIsPlaying(2);
                return;
            }
        }
        for(let i=0; i<7; i+=3){
            if(board[i] === board[i+1] === board[i+2]){
                setIsPlaying(2);
                return;
            }
        }
        if(board[0] === board[4] === board[8] || board[2] === board[4] === board[6]){
            setIsPlaying(2);
        }
    }

    function handleBoard(i) {
        const newBoard = board.slice();
        if(isPlaying === 2 || newBoard[i]) return;
        console.log(isPlaying);
        if(sign)
            newBoard[i] = 'X';
        else 
            newBoard[i] = 'O';
        setSign(!sign);
        setBoard(newBoard);
        checkIfOver();
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