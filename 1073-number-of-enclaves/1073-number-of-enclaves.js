/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    /*
        loop through edges of grid
            - if we find a 1 DFS and turn all connecting 1's to 0's 
        loop through grid again and count 1's 
        return count
    */
    const m = grid.length; 
    const n = grid[0].length; 
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    // iterate 1st and last row
    for (let i = 0; i < n; i++) {
        if (grid[0][i] === 1) DFS(0, i, grid, directions);
        if (grid[m - 1][i] === 1) DFS(m - 1, i, grid, directions);
    }
    // iterate 1st and last col
    for (let j = 0; j < m; j++) {
        if (grid[j][0] === 1) DFS(j, 0, grid, directions);
        if (grid[j][n - 1] === 1) DFS(j, n - 1, grid, directions);
    }

    let enclaves = 0;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) enclaves += 1;
        }
    }
    return enclaves;
};

function DFS(row, col, grid, directions) {
    grid[row][col] = 0;
    for (let [x, y] of directions) {
        let newRow = row + x;
        let newCol = col + y;
        if (grid?.[newRow]?.[newCol] === 1) {
            grid[newRow][newCol] = 0;
            DFS(newRow, newCol, grid, directions);
        }
    }
}