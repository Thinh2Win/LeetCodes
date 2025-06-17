/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    /*
        Dijkstras 
        - Min queue + BFS
        - starting at 0,0, so queue will have [[0,0], 1] coordinates, path length
        - set grid at start to 1 to avoid backtracking 
        - pop from queue
            - check 8 directions 
            - if direction is a 0, change coordinate to 1, push coordinates and curr length + 1 into queue 
        - if we reach the coordinates of the end we return path length 
        - if our loop stops running and we never reached the end we return -1
    */
    if (grid[0][0] == 1) return -1;
    const minQ = new MinPriorityQueue(arr => arr[1]);
    minQ.enqueue([[0,0], 1]);
    grid[0][0] = 1;
    let directions = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[-1,1],[1,-1],[-1,-1]];

    while (minQ.size()) {
        let [coordinates, currLength] = minQ.dequeue();
        let [row, col] = coordinates;
        if (row === grid.length - 1 && col === grid[0].length - 1) return currLength;
        directions.forEach(([x, y]) => {
            let newRow = row + x;
            let newCol = col + y;
            if (grid?.[newRow]?.[newCol] == 0) {
                grid[newRow][newCol] = 1;
                minQ.enqueue([[newRow, newCol], currLength + 1]);
            }
        })
    }
    return -1;
};