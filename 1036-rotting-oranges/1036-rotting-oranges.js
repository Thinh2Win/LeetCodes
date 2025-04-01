/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 2) queue.push([row, col]);
        }
    };

    let minutes = 0;
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];
    while (queue.length) {
        let nextRound = [];
        let end = queue.length;
        for (let i = 0; i < end; i++) {
            let [row, col] = queue.pop();
            for (let [x, y] of directions) {
                let newRow = row + x;
                let newCol = col + y;
                if (grid?.[newRow]?.[newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    nextRound.push([newRow, newCol]);
                }
            }
        }
        queue = nextRound;
        if (nextRound.length) minutes += 1;
    }
    for (let row of grid) {
        if (row.some(num => num === 1)) return -1;
    }
    return minutes;
};