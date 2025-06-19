/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    /* 
        loop through first and last rows and cols of grid 
        change any 0's to 1's 

        loop through grid again 
            - if we encounter 0, dfs to change all connecting 0's to 1's 
            - increment island count 
        return island count
    */
    const m = grid.length; // row length
    const n = grid[0].length; // col length
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    // iterate through 1st and last row
    for (let i = 0; i < n; i++) {
        if (grid[0][i] === 0) DFS(0, i, grid, directions);
        if (grid[m - 1][i] === 0) DFS(m - 1, i, grid, directions);
    }
    // iterate through 1st and last col
    for (let j = 0; j < m; j++) {
        if (grid[j][0] === 0) DFS(j, 0, grid, directions);
        if (grid[j][n - 1] === 0) DFS(j, n - 1, grid, directions);
    }
    let islands = 0;
    // loop through grid and count islands 
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 0) {
                DFS(row, col, grid, directions);
                islands += 1;
            }
        }
    }
    return islands;
};

function DFS(row, col, grid, directions) {
    grid[row][col] = 1;
    for (let [x, y] of directions) {
        let newRow = row + x;
        let newCol = col + y;
        if (grid?.[newRow]?.[newCol] === 0) {
            grid[newRow][newCol] = 1;
            DFS(newRow, newCol, grid, directions);
        }
    }
}