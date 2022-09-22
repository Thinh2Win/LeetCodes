/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q = [];
    let counter = 0;
    let containsOranges = false;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 2) {
                q.push([row, col]);
            }
            if (grid[row][col] === 1) {
                containsOranges = true;
            }
        }
    }
    if (!containsOranges) {
        return 0;
    }
    if (q.length === 0 && containsOranges) {
        return -1;
    }
    const BFS = (row, col) => {
        // check up
        if (row - 1 >= 0 && grid[row - 1][col] === 1) {
            grid[row - 1][col] = 2;
            q.push([row - 1, col])
        }
        // check down
        if (row + 1 < grid.length && grid[row + 1][col] === 1) {
            grid[row + 1][col] = 2;
            q.push([row + 1, col]);
        }
        // check left
        if (col - 1 >= 0 && grid[row][col - 1] === 1) {
            grid[row][col - 1] = 2;
            q.push([row, col - 1]);
        }
        // check right 
         if (col + 1 < grid[row].length && grid[row][col + 1] === 1) {
            grid[row][col + 1] = 2;
            q.push([row, col + 1])
        }
    }
    while (q.length) {
        let recentOranges = q.length;
        for (let i = 0; i < recentOranges; i++) {
            let location = q.shift();
            BFS(location[0], location[1]);
        }
        counter += 1; 
    }
    for (let j = 0; j < grid.length; j++) {
        for (let k = 0; k < grid[j].length; k++) {
            if (grid[j][k] === 1) {
                return -1;
            } 
        }
    }
    return counter - 1;
};