/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let cells = [];
    let dead = [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === 1) {
                cells.push([row, col]);
            } 
            if (board[row][col] === 0 && getNeighbors([row, col], board) === 3) {
                dead.push([row, col]);
            }
        }
    }
    for (let i = 0; i < cells.length; i++) {
        let neighbors = getNeighbors(cells[i], board);
        cells[i].push(neighbors);
    }
    cells.forEach(cell => {
       let [row, col, neighbor] = cell;
        if (neighbor < 2 || neighbor > 3) {
            board[row][col] = 0;
        }
    });
    dead.forEach(cell => {
        let [row, col] = cell;
        board[row][col] = 1;
    });
    return board;
};

function getNeighbors(coordinate, board) {
    let [row, col] = coordinate;
    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, 1], [1, -1], [1, 0]];
    let count = 0;
    directions.forEach(direction => {
        let [x, y] = direction;
        if (board[row + x]?.[col + y] === 1) {
            count += 1;
        }
    });
    return count;
}