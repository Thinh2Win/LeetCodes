/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix = new Array(m).fill(0).map((zero, idx) => {
        if (idx === 0) {
            return new Array(n).fill(1);
        } else {
            let row = new Array(n).fill(0);
            row[0] = 1;
            return row;
        }
    });
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
        }
    }
    return matrix.at(-1).at(-1);
};