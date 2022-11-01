/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let grid = new Array(m).fill(0).map(zero => new Array(n).fill(1));
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            grid[row][col] = grid[row - 1][col] + grid[row][col - 1];
        }
    }
    return grid.at(-1).at(-1);
};