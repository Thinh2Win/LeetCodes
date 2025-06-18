/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    /*
        DFS
        - loop through grid 
        - if we reach a '1'
            - DFS changing square and all connected 1's to a '0' to avoid backtracking 
            - increment island count 
        - return island count 
    */
    let islands = 0;
    const n = grid.length;
    const m = grid[0].length;
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (grid[row][col] === '1') {
                grid[row][col] = '0';
                DFS(row, col, grid, directions);
                islands += 1;
            }
        }
    }
    return islands;
};

function DFS(row, col, grid, directions) {
    for (let [x, y] of directions) {
        let newRow = row + x;
        let newCol = col + y;
        if (grid?.[newRow]?.[newCol] === '1') {
            grid[newRow][newCol] = '0';
            DFS(newRow, newCol, grid, directions);
        }
    }
}