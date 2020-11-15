export default function calculateFun(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ]
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
         squares[b] &&
         squares[a] === squares[b] &&
         squares[a] === squares[c]
      ) {
         return { calWinner: squares[c], winningSquares: lines[i] }
      }
   }
   return { calWinner: null, winningSquares: [] }
}
