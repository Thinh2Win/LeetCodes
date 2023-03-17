/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // find locations of all border O's 
    // BFS from locations and change O's to C to mark that 
    // they should not be changed
    // iterate through board and change all O's to X's 
    // and change all C's back to O's
    let locations = [];
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === 'O') locations.push([0, i]);
        if (board[board.length - 1][i] === 'O') locations.push([board.length - 1, i]);
    }
    for (let j = 0; j < board.length; j++) {
        if(board[j][0] === 'O') locations.push([j, 0]);
        if (board[j][board[0].length - 1] === 'O') locations.push([j, board[0].length - 1]);
    }
    const BFS = (location) => {
        let [row, col] = location;
        board[row][col] = 'C';
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        directions.forEach(direction => {
            let [x, y] = direction
            if (board[row + x]?.[col + y] === 'O') BFS([row + x, col + y]);
        });
    }
    locations.forEach(location => BFS(location));
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === 'O') board[row][col] = 'X';
            if (board[row][col] === 'C') board[row][col] = 'O';
        }
    }
};