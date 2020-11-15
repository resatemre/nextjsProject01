export const calculater = (square) => {
   const logic = [
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
   ];

   for (let i = 0; i < logic.length; i++) {
      const [a, b, c] = logic[i];
      if (square[b] && square[a] === square[c] && square[b] === square[c]) {
         return { theWinner: square[a], winningLines: logic[i] };
      }
   }
   return { theWinner: null, winningLines: [] };
};
