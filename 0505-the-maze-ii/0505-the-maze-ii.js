/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function(maze, start, destination) {
    // create dp array to track min distance for a square to prune paths 
    // only want to travel a direction if the square we end up on is less than the curr distance
    const m = maze.length;
    const n = maze[0].length; 

    const dp = Array.from({length: m}, () => new Array(n).fill(Infinity));
    dp[start[0]][start[1]] = 0;
    
    const minQ = new MinPriorityQueue(duple => duple[0]); // [distance, coordinates]
    minQ.enqueue([0, start]);
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    while(minQ.size()) {
        let [currDist, [row, col]] = minQ.dequeue();
        const [e1, e2] = destination;
        if (row === e1 && col === e2) return currDist;

        for (let [x, y] of directions) {
            let newRow = row;
            let newCol = col;
            let distance = 0;
            while (maze?.[newRow + x]?.[newCol + y] === 0) {
                newRow += x;
                newCol += y;
                distance += 1;
            }

            let newDist = distance + currDist;
            if (dp[newRow][newCol] > newDist) {
                dp[newRow][newCol] = newDist;
                minQ.enqueue([newDist, [newRow, newCol]]);
            }
        }
    }

    return -1;
};