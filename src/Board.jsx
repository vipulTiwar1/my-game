import Square from "./Square"

function Board({board, sign, onPlay}){
    var winner;
    
    function checkIfOver(newBoard){
        for(var i=0; i<3; i++){
            if(newBoard[i] && newBoard[i] === newBoard[i+3] && newBoard[i+3] === newBoard[i+6]){
                winner = newBoard[i];
                return true;
            }
        }   
        for(i=0; i<7; i+=3){
            if(newBoard[i] && newBoard[i] != null && newBoard[i] === newBoard[i+1] && newBoard[i+1] === newBoard[i+2]){
                winner = newBoard[i];
                return true;
            }
        }
        if(newBoard[0] && (newBoard[0] === newBoard[4] && newBoard[4] === newBoard[8])){
            winner = newBoard[0];   
            return true;
        }
        if(newBoard[2] && (newBoard[2] === newBoard[4] && newBoard[4] === newBoard[6])){
            winner = newBoard[2];
            return true;
        }
        return false;
    }

    function handleBoard(i){
        const newBoard = board.slice();
        if(checkIfOver(newBoard) || newBoard[i]) {
            return;
        }
        if(sign)
            newBoard[i] = 'X';
        else 
            newBoard[i] = 'O';
        onPlay(newBoard);
    }

    return (
        <>
            {!checkIfOver(board) ?
                (<div>
                    Next Move : {sign === true ? 'X' : 'O'}
                </div>) : (
                    <div>
                        Winner : {winner}
                    </div>
                )
            }
                
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