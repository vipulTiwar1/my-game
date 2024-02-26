import AscDesc from "./AscDesc";
import Board from "./Board";
import { useState } from "react";
import TimeTravel from "./TimeTravel"


function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [moves, setMoves] = useState(Array(
        <li key={0}>
            <button className="timetrav" onClick={goToStart}>Go To Start</button>
        </li>
    ));
    const [choose, setChoose] = useState(true);


    function handleBoard(nextSquare) {
        if(history.length !== currentMove+1){
            const newHistory = history.slice(0, currentMove+1);
            const newMoves = moves.slice(0, currentMove+1);
            setMoves([...newMoves, <li key={20}>
                    You Are At Move #{currentMove+1}
            </li>])
            setHistory([...newHistory, nextSquare]);
        }
        else{
            setHistory([...history, nextSquare]);
            const li = <li key={20}>You Are At Move #{currentMove+1}</li>;

            if(currentMove !== 0){
                const newMoves = moves;
                newMoves.pop();
                newMoves.push(
                    <li key={currentMove}>
                        <button className="timetrav" onClick={() => goToMove(currentMove)}>Go To Move #{currentMove}</button>
                    </li>
                )
                newMoves.push(li);
                setMoves(newMoves);
            }
            else{
                const newMoves = moves;
                newMoves.push(li);
                setMoves(newMoves);
            }
        }
        setCurrentMove(currentMove+1);
    }

    function goToStart(){
        setHistory([Array(9).fill(null)]);
        setMoves(Array(
            <li key={0}>
                <button className="timetrav" onClick={goToStart}>Go To Start</button>
            </li>
        ));
        setCurrentMove(0);
    }

    function goToMove(index){
        const newMoves = moves;
        newMoves.pop();
        newMoves.push(
            <li key={20}>
                You Are At Move #{index}
            </li>
        )
        setCurrentMove(index);
    }

    function handleToggle(){
        setChoose(!choose);
    }

    return (
        <>
            <Board board={history[currentMove]} curr={currentMove} onPlay={handleBoard}/>
            <AscDesc choose={choose} toggle={handleToggle}/>
            <TimeTravel moves={moves} choose={choose}/>
        </>
    );
}

export default Game;