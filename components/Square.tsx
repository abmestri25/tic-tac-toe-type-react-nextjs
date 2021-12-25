type Player = 'X' | 'O' | 'BOTH'| null;
function calculateWinner(squares :Player[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}
function  Square({ value, onClick, winner }: {
    winner: Player;
    value: Player;
    onClick: () => void;
}) {

    if (!value) {
        return <button onClick={onClick} className="square" disabled={Boolean(winner)} />
    }
    return <button disabled className={`square square_${value.toLocaleLowerCase()}`}>{value}</button>
}

export default Square
