/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    // find all outer edge 1's and save coordinates 
    // turn the outer 1's into 0's
    // then DFS through our coordinates and change any connecting 1's
    // to 0's 
    // iterate over our grid and count reminaing 1's
    let coordinates = [];
    for (let row = 0; row < grid.length; row++) {
        if (grid[row][0] === 1) {
            coordinates.push([row, 0]);
        }
        if (grid[row][grid[row].length - 1] === 1) {
            coordinates.push([row, grid[row].length - 1]);
        }
    }
    for (let col = 0; col < grid[0].length; col++) {
        if (grid[0][col] === 1) {
            coordinates.push([0, col]);
        }
        if (grid[grid.length - 1][col] === 1) {
            coordinates.push([grid.length - 1, col]);
        }
    }
    
    const DFS = (coordinate) => {
        let [row, col] = coordinate;
        grid[row][col] = 0;
        let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
        directions.forEach(direction => {
            let [x, y] = direction;
            if (grid[row + x]?.[col + y] === 1) {
                DFS([row + x, col + y]);
            } 
        });
    };
    
    for (let i = 0; i < coordinates.length; i++) {
        let [row, col] = coordinates[i];
        if (grid[row][col] === 0) continue;
        DFS(coordinates[i]);
    }
    
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                count += 1;
            }
        }
    }
    return count;
};