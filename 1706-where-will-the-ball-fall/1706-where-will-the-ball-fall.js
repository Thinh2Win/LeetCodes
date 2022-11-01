/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const isTrapped = (row, col, grid) => {
    let rowMax = grid.length - 1;
    let colMax = grid[0].length - 1;
    if (grid[row][col] === 1) {
        if (col + 1 > colMax) {
            return true;
        }
        if (grid[row][col + 1] === -1) {
            return true;
        }
    }
    if (grid[row][col] === -1) {
        if (col - 1 < 0) {
            return true;
        }
        if (grid[row][col - 1] === 1) {
            return true;
        }
    }
    return false;
}

var findBall = function(grid) {
    let dp = new Array(grid.length).fill(0).map(zero => new Array(grid[0].length).fill(0));
    let answer = new Array(grid[0].length).fill(-1);
    const DFS = (row, col, origin) => {
    if (isTrapped(row, col, grid)) {
        dp[row][col] = false;
        return false;
    }
    if (row === grid.length - 1 && !isTrapped(row, col, grid)) {
        if (grid[row][col] === -1) {
            answer[origin] = col - 1;
            dp[row][col - 1] = true;
        } else {
            answer[origin] = col + 1;
            dp[row][col + 1] = true;
        }
        return true; 
    }
    if (dp[row][col] === true || dp[row][col] === false) {
        return dp[row][col];
    }
    let result = null;
    if (grid[row][col] === -1) {
        result = DFS(row + 1, col - 1, origin);
    } else if (grid[row][col] === 1){
        result = DFS(row + 1, col + 1, origin);
    }
    dp[row][col] = result;
    return result;
    }
    for (let row = 0; row < 1; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            DFS(row, col, col)
        }
    }
    return answer;
};