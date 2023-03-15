/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // BFS 
    let zeros = [];
    // find location of all zeros 
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                zeros.push([row, col]);
            }
        }
    }
    // do BFS from each location and change the top left right and bottom 
    // squares to 0
    zeros.forEach(zero => crossChange(matrix, zero[0], zero[1]));
};

function crossChange(matrix, row, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
    for (let j = 0; j < matrix[row].length; j++) {
        matrix[row][j] = 0;
    }
}