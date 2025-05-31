/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
     const n = board.length;
  
  // Helper function to convert a square number to board coordinates.
  const getCoordinates = (s) => {
    const r = n - 1 - Math.floor((s - 1) / n);
    let c = (s - 1) % n;
    if ((n - 1 - r) % 2 === 1) { // odd row from the bottom means reverse column order
      c = n - 1 - c;
    }
    return [r, c];
  };
  
  const target = n * n;
  const queue = [];
  queue.push({square: 1, moves: 0});
  const visited = new Array(target + 1).fill(false);
  visited[1] = true;
  
  while (queue.length) {
    const {square, moves} = queue.shift();
    if (square === target) return moves;
    
    for (let dice = 1; dice <= 6; dice++) {
      let nextSquare = square + dice;
      if (nextSquare > target) break;
      
      const [r, c] = getCoordinates(nextSquare);
      // If there's a snake or ladder, take it.
      if (board[r][c] !== -1) {
        nextSquare = board[r][c];
      }
      
      if (!visited[nextSquare]) {
        visited[nextSquare] = true;
        queue.push({square: nextSquare, moves: moves + 1});
      }
    }
  }
  
  return -1;
};