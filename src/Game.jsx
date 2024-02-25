import Board from "./Board";
import TimeTravel from "./TimeTravel";
import { useState } from "react";

function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [sign, setSign] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    function handleBoard(nextSquare) {
        if(history.length !== currentMove+1){
            const newHistory = history.slice(0, currentMove+1);
            setHistory([...newHistory, nextSquare]);
        }
        else{
            setHistory([...history, nextSquare]);
        }
        setCurrentMove(currentMove+1);
        setSign(!sign);
    }

    function goToStart(){
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
        setSign(true);
    }

    function goToMove(index){
        setCurrentMove(index);
        if(index%2 === 0) setSign(true);
        else setSign(false);
    }

    return (
        <>
            <Board board={history[currentMove]} sign = {sign} onPlay={handleBoard}/>
            <TimeTravel history={history} goToStart={goToStart} goToMove={goToMove}/>
        </>
    );
}

export default Game;