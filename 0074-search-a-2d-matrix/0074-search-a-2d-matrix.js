/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[row].length - 1;
    while (row < matrix.length && col >= 0) {
        let curr = matrix[row][col];
        if (curr > target) {
            // move left
            col -= 1;
        } else if (curr < target) {
            // move down
            row += 1;
        } else {
            return true;
        }
    }
    return false;
};