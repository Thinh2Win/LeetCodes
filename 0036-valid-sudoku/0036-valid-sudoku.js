/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return validRows(board) && validColumns(board) && validSquares(board);
};

const validRows = (board) => {
     for (let row = 0; row < board.length; row++) {
        let map = {};
        for (let col = 0; col < board[row].length; col++) {
            let num = board[row][col]
            if (num !== '.' && !map[num]) {
                map[num] = 1;
            } else if (map[num]) {
                return false;
            }
        }
    }
    return true;
}

const validColumns = (board) => {
    for (let col = 0; col < board[0].length; col++) {
        let map = {};
        for (let row = 0; row < board.length; row++) {
            let num = board[row][col];
            if (num !== '.' && !map[num]) {
            map[num] = 1;
            } else if (map[num]) {
                return false;
            }
        }
    }
    return true;
}

const validSquares = (board) => {
    let rowStart = 0;
    let rowEnd = 3;
    while (rowEnd <= 9) {
        let colStart = 0;
        let colEnd = 3;
        while (colEnd <= 9) {
            let map = {};
            for (let row = rowStart; row < rowEnd; row++) {
                for (let col = colStart; col < colEnd; col++) {
                    let num = board[row][col];
                    if (num !== '.' && !map[num]) {
                        map[num] = 1;
                    } else if (map[num]) {
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