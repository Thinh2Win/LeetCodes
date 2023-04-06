/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) { 
    let coordinates = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                coordinates.push([row, col]);
            }
        }
    }
    
    const BFS = (coordinate) => {
        let [row, col] = coordinate;
        grid[row][col] = '0';
        let directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
        directions.forEach(direction => {
            let [x, y] = direction;
            if (grid[row + x]?.[col + y] === '1') {
                BFS([row + x, col + y]);
            }
        });
        return 1;
    }
    
    let count = 0;
    for (let i = 0; i < coordinates.length; i++) {
        let [row, col] = coordinates[i];
        if (grid[row][col] === '0') continue;
        count += BFS(coordinates[i]);
    }
    return count;
};