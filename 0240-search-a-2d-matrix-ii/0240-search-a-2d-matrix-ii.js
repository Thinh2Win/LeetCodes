/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row !== matrix.length - 1 && col >= 0) {
        let curr = matrix[row][col];
        if (curr === target) return true;
        if (curr > target) col -= 1;
        if (curr < target) row += 1;
    }
    while (col >= 0) {
        if (matrix[row][col] === target) return true;
        col -= 1;
    }
    while (row < matrix.length) {
        if (matrix[row][col] === target) return true;
        row += 1;
    }
    return false;
};