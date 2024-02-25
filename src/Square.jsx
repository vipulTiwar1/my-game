function Square({value, onMove}) {
    return (
        <button className="square" onClick={onMove}>
            {value}
        </button>
    )
}

export default Square;