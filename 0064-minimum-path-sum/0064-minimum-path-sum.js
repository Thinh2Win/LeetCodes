/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = new Array(grid.length).fill(0).map(zero => new Array(grid[0].length).fill(0));
    dp[0][0] = grid[0][0];
    for (let i = 1; i < grid.length; i++) {
        
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    for (let j = 1; j < grid[0].length; j++) {
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }
    for (let row = 1; row < grid.length; row++) {
        for (let col = 1; col < grid[row].length; col++) {
            let min = Math.min(dp[row - 1][col], dp[row][col - 1]);
            dp[row][col] = grid[row][col] + min;
        };
    }
    console.log(dp)
    return dp.at(-1).at(-1);
};