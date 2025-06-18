/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let island = null;
    // traverse through grid, when we encounter a 1 we bfs to find connecting 1's that form the island 
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (island) break;
            if (grid[row][col] === 1) {
                island = BFS([row, col], grid);
                break;
            }
        }
    }
    // keep track of the squares in a map and in a queue 
    let queue = island;
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let rounds = 0;
    // once we found 1 island, we BFS from the squares 
    while (queue.length) {
        let neighbors = [];
        let end = queue.length;
        for (let i = 0; i < end; i++) {
            let [row, col] = queue.pop();
            for (let [x, y] of directions) {
                let newRow = row + x;
                let newCol = col + y;
                if (grid?.[newRow]?.[newCol] === 1) {
                    // islands are connected return count
                    return rounds;
                } else if (grid?.[newRow]?.[newCol] === 0 ) {
                    // bfs to find other island 
                    grid[newRow][newCol] = 2;
                    neighbors.push([newRow, newCol]);
                }
            }
        }
        queue = neighbors;
        rounds += 1;
    }
    return rounds;
    // keep track of how many bfs rounds we've done 
    // if we reach another square that is not apart of our curr island we can return our count 
};

function BFS(square, grid) {
    let queue = [square];
    let island = [];
    let directions = [[1,0],[-1,0],[0,1],[0,-1]];
    grid[square[0]][square[1]] = 2; // set start to 2 to avoid revisiting

    while (queue.length) {  
        let neighbors = [];
        let end = queue.length;
        island.push(...queue);
        for (let i = 0; i < end; i++) {
            let [row, col] = queue.pop();
            for (let [x, y] of directions) {
                let newRow = row + x;
                let newCol = col + y;
                if (grid?.[newRow]?.[newCol] === 1) {
                     grid[newRow][newCol] = 2;
                     neighbors.push([newRow, newCol]);
                }
            }
        }
        queue = neighbors;
    }
   
    return island;
}