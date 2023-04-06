/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let coordinates = [];
    for (let row = 0; row < grid.length; row++) {
        if (grid[row][0] === 0) {
            coordinates.push([row, 0]);
            grid[row][0] = 2;
        }
        if (grid[row][grid[row].length - 1] === 0) {
            coordinates.push([row, grid[row].length - 1]);
            grid[row][grid[row].length - 1] = 2;
        }
    }
    for (let col = 0; col < grid[0].length; col++) {
        if (grid[0][col] === 0) {
            coordinates.push([0, col]);
            grid[0][col] = 2;
        }
        if (grid[grid.length - 1][col] === 0) {
            coordinates.push([grid.length - 1, col]);
            grid[grid.length - 1][col] = 2;
        }
    }
    const DFS = (coordinate) => {
        let [row, col] = coordinate;
        grid[row][col] = 2;
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        directions.forEach(direction => {
            let [x, y] = direction;
            if (grid[row + x]?.[col + y] === 0) {
                DFS([row + x, col + y]);
            }
        });
    };
    for (let i = 0; i < coordinates.length; i++) {
        DFS(coordinates[i]);
    }
    let remaining = [];
    for (let row = 1; row < grid.length; row++) {
        for (let col = 1; col < grid[row].length; col++) {
            if (grid[row][col] === 0) {
                remaining.push([row, col]);
            }
        }
    }
    let count = 0;
    const BFS = (coordinate) => {
        let [row, col] = coordinate;
        grid[row][col] = 1;
        let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        directions.forEach(direction => {
            let [x, y] = direction;
            if (grid[row + x][col + y] === 0) {
                BFS([row + x, col + y]);
            } 
        });
        return 1;
    }
    for (let i = 0; i < remaining.length; i++) {
        let [row, col] = remaining[i];
        if (grid[row][col] === 1) continue;
        count += BFS(remaining[i]);
    }
    return count;
};