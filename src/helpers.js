export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // column 1
    [1, 4, 7], // column 2
    [2, 5, 8], // column 3
    [0, 4, 8], // diagonal 1
    [2, 4, 6], // diagonal 2
  ];

  for (let i = 0; i < lines.length; i++) {
    // destructuring
    const [a, b, c] = lines[i];
    // check if the squares[a] is not null and equal to squares[b] and squares[c]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // return the winner
      return squares[a];
    }
  }
  // return null if there is no winner
  return null;
}
