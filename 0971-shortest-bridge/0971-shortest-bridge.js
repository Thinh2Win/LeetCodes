/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    // BFS from smallest island 
    // traverse grid and find the size of both islands 
    // BFS + memo to track visited squares to get count 
    // BFS if we encounter a 1
    let visited = new Map();
    let island1 = null;
    let island2 = null;
    let map1 = null;
    let map2 = null;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1 && !visited.has(`${row},${col}`)) {
                let [island, islandMap] = BFS([row, col], grid, visited);
                if (!island1) {
                    island1 = island;
                    map1 = islandMap;
                } else {
                    island2 = island;
                    map2 = islandMap;
                }
            }
        }
    }
    let smallest = island1.length < island2.length ? island1 : island2;
    let sMap = smallest === island1 ? map1 : map2;
    let lMap = smallest === island2 ? map1 : map2;
    let queue = smallest;
    let count = 0;
    while (queue.length) {
        let directions = [[1,0],[-1,0],[0,1],[0,-1]];
         let nextRound = [];
    // pop from queue and increment count 
        let end = queue.length;
        for (let i = 0; i < end; i++) {
            let [row, col] = queue.pop();
            sMap.set(`${row},${col}`, true);
            for (let [x, y] of directions) {
                let newRow = row + x;
                let newCol = col + y;
                let check = `${newRow},${newCol}`;
                if (lMap.has(check)) return count;
    // push any neighbor 1's into queue if we havent checked them already 
                if (grid?.[newRow]?.[newCol] === 0 && !sMap.get(check)) {
                    sMap.set(check, true);
                    nextRound.push([newRow, newCol]);
                } 
            }
        }
        count += 1;
        queue = nextRound;
    }
};

function BFS(square, grid, visited) {
    // count 
    let island = [];
    let islandMap = new Map();
    // queue to hold 1's 
    let queue = [square];
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];

    while (queue.length) {
    // 2nd queue to hold next round of bfs 
        let nextRound = [];
    // pop from queue and increment count 
        let end = queue.length;
        for (let i = 0; i < end; i++) {
            let [row, col] = queue.pop();
            island.push([row, col]);
            visited.set(`${row},${col}`, true);
            islandMap.set(`${row},${col}`, true);
            for (let [x, y] of directions) {
                let newRow = row + x;
                let newCol = col + y;
                let check = `${newRow},${newCol}`;
    // push any neighbor 1's into queue if we havent checked them already 
                if (grid?.[newRow]?.[newCol] === 1 && !visited.get(check)) {
                    visited.set(check, true);
                    nextRound.push([newRow, newCol]);
                } 
            }
        }
    // set queue to 2nd queue to start next round 
        queue = nextRound;
    }
    return [island, islandMap];
}