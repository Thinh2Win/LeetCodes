/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 1 && n === 1) return 1;
    let matrix = new Array(m).fill(0).map((zero, idx) => {
        if (idx === 0) {
            return new Array(n).fill(1);
        }
        let row = new Array(n).fill(0);
        row[0] = 1;
        return row;
    });
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
            matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
        }
    }
    return matrix.at(-1).at(-1);
};