/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // bfs 
    // keep count of turns it takes to rot all connecting oranges 
    let queue = [];
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 2) {
                queue.push([row, col]);
            }
        }
    }
    // first need to find coordinates of rotting orange 
    // put coordinates in a queue
    let rounds = 0;
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    while (queue.length) {
    // have another array to track next round coordinates
        let nextRound = [];
    // pop from queue  
        let end = queue.length; 
        for (let i = 0; i < end; i++) {
    // BFS, checking 4 directions, if the square is a 1, we change to a 2 and push into next round queue 
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
    // set next round in queue 
        queue.push(...nextRound);
    // once round is over, increment count 
        rounds += 1;
    }
    if (rounds > 0) rounds -= 1; // rounds is off by 1 at the very end of BFS 
    // check if any oranges are left 
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) return -1;
        }
    }
    return rounds;
};