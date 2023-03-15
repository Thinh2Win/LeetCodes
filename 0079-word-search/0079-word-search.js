/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) { 
    // find all locations of first letter of word
    // then do bfs from locations to check if the next following letters exist 
    // if (word.length > (board.length * board[0].length)) return false;
    let locations = [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0]) {
                locations.push([row, col]);
            }
        }
    }
    const BFS = (idx, [row, col]) => {
        if (idx === word.length) {
            return true;
        }
        board[row][col] = '*'
        let letter = word[idx];
        if (row - 1 >= 0 && board[row - 1][col] === letter) {
            var up = BFS(idx + 1, [row - 1, col]) || false;
        }
         if (col + 1 < board[row].length && board[row][col + 1] === letter) {
            var right = BFS(idx + 1, [row, col + 1]) || false;
        }
         if (row + 1 < board.length && board[row + 1][col] === letter) {
             var down = BFS(idx + 1, [row + 1, col]) || false;
        }
         if (col - 1 >= 0 && board[row][col - 1] === letter) {
            var left = BFS(idx + 1, [row, col - 1]) || false;
        }
        board[row][col] = word[idx - 1];
        return (up || left || down || right);
    };
    for (let i = 0; i < locations.length; i++) {
        if (BFS(1, locations[i])) return true;    
    };
    return false;
};