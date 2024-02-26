function AscDesc({choose, toggle}) {

    return (
        <>
            {
                choose ? (
                    <button className="timetrav" onClick={toggle}>
                        Click to Ascend Moves
                    </button>
                ) : (
                    <button className="timetrav" onClick={toggle}>
                        Click to Descend Moves
                    </button>
                )
            }
            
        </>
    )
}

export default AscDesc