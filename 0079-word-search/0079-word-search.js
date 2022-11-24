/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let hasWord = false;
        
         const DFS = (idx, position) => {
            let [row, col] = position;
             if (hasWord) return true; 
            if (idx === word.length - 1) {
                hasWord = true;
                return;
            }
            board[row][col] = 1;
            //check up
            if (row - 1 >= 0 && board[row - 1][col] === word[idx + 1]) {
                DFS(idx + 1, [row - 1, col]);
            }
            // check left
            if (col - 1 >= 0 && board[row][col - 1] === word[idx + 1]) {
                DFS(idx + 1, [row, col - 1]);
            }
            // check down 
            if (row + 1 < board.length && board[row + 1][col] === word[idx + 1]) {
                DFS(idx + 1, [row + 1, col]);
            }
            // check right 
            if (col + 1 < board[row].length && board[row][col + 1] === word[idx + 1]) {
                DFS(idx + 1, [row, col + 1]);
            }
             board[row][col] = word[idx];
        }
     for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0]) {
                DFS(0, [row, col]); 
                if (hasWord) return true;
            }
        }
    }
    return hasWord; 
};