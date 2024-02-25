function TimeTravel({history, goToStart, goToMove}) {

    const moves = history.map((his, index) => {
        if(index === 0){
            return (
                <li key={index}>
                    <button className="timetrav" onClick={goToStart}>Go To Start</button>
                </li>
            )
        }
        else if(index === history.length-1){
            return (
                <li key={index}>
                    You Are At Move #{index}
                </li>
            )
        }
        else {
            return (
                <li key={index}>
                    <button className="timetrav" onClick={() => goToMove(index)}>Go To Move #{index}</button>
                </li>
            )
        }
    })

    return (
        <>
            <ol>
                {moves}
            </ol>
        </>
    )
}

export default TimeTravel;