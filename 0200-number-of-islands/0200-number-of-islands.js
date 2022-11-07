/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // iterate through grid 
    // if we find a 1 we do BFS and change all attatched 1's to 0's 
    // increment counter 
    // return counter 
    let counter = 0;
    const BFS = ([row, col]) => {
    let q = [[row, col]];
    grid[row][col] = 0;
    while (q.length) {
        let [row, col] = q.shift();
        if (row - 1 >= 0 && grid[row - 1][col] === '1') {
            grid[row - 1][col] = 0;
            q.push([row - 1, col]);
        }
        if (row + 1 < grid.length && grid[row + 1][col] === '1') {
            grid[row + 1][col] = 0;
            q.push([row + 1, col]);
        }
        if (col - 1 >= 0 && grid[row][col - 1] === '1') {
            grid[row][col - 1] = 0;
            q.push([row, col - 1]);
        }
        if (col + 1 >= 0 && grid[row][col + 1] === '1') {
            grid[row][col + 1] = 0;
            q.push([row, col + 1]);
        }
    }
}

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                counter += 1;
                BFS([row, col]);
            }
        }
    }
    return counter;
};

