/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return checkSquares(board) && checkRowsAndCols(board);
};

function checkSquares (board) {
    let rowStart = 0;
    let rowEnd = 3;
    while (rowEnd <= 9) {
        let colStart = 0;
        let colEnd = 3;
        while (colEnd <= 9) {
            let map = {};
            for (let row = rowStart; row < rowEnd; row++) {
                for (let col = colStart; col < colEnd; col++) {
                    if (board[row][col] !== '.' && !map[board[row][col]]) {
                        map[board[row][col]] = 1;
                    } else if (map[board[row][col]]) {
                        return false;
                    }
                }
            }
            colStart += 3;
            colEnd += 3;
        }
        rowStart += 3;
        rowEnd += 3;
    }
    return true;
}


function checkRowsAndCols (board) {
    for (let i = 0; i < board.length; i++) {
        let rows = {};
        let columns = {};
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== '.') {
                if (rows[board[i][j]]) {
                    return false;   
                } 
                rows[board[i][j]] = 1;
            }
           if (board[j][i] !== '.') {
               if (columns[board[j][i]]) {
                   return false;
               }
               columns[board[j][i]] = 1;
           }
        }
    };
    return true;
}