/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let counter = 0; 
    const BFS = (row, col) => {
        grid[row][col] = '0';
        // check up
        if (row - 1 >= 0 && grid[row - 1][col] === '1') {
            BFS(row - 1, col);
        }
        // check right 
        if (col + 1 < grid[row].length && grid[row][col + 1] === '1') {
            BFS(row, col + 1);
        }
        // check down
        if (row + 1 < grid.length && grid[row + 1][col] === '1') {
            BFS(row + 1, col);
        } 
        // check left
         if (col - 1 >= 0 && grid[row][col - 1] === '1') {
            BFS(row, col - 1);
        }
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                counter += 1;
                BFS(row, col);
            }
        }
    }
    return counter;
};
