/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

var isToeplitzMatrix = function(matrix) {
    for (let row = 0; row < 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (invalidDiagonal([row, col], matrix)) {
                return false;
            }
        }
    }
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 0; col < 1; col++) {
            if (invalidDiagonal([row, col], matrix)) {
                return false;
            }
        }
    }
    return true; 
};

const invalidDiagonal = (index, matrix) => {
    let [row, col] = index;
    let num = matrix[row][col];
    while (row < matrix.length && col < matrix[row].length) {
        if (num !== matrix[row][col]) {
            return true;
        }
        row += 1;
        col += 1;
    }
    return false;
}