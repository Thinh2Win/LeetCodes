/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    /*
        BFS from zeros 
        - create a matrix and fill with '*' to help avoid revisiting squares 
        - use queue 
        - track curr round 
        - loop through matrix 
            - if square is a 0
            - mark visited matrix as a 0
            - add coordinates to queue  
        - pop from queue 
            - look in 4 directions 
            - if square is a '*' 
            - set square in visited matrix to round #
            - push coordinates into queue
        - when queue is empty return visited matrix
    */
    const n = mat.length;
    const m = mat[0].length; 
    const visited = Array.from({length: n}, () => new Array(m).fill('*'));
    let queue = [];

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (mat[row][col] === 0) {
                visited[row][col] = 0;
                queue.push([row, col]);
            }
        }
    }

    let dist = 1;
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    while (queue.length) {
        let nextRound = [];
        let end = queue.length; 
        for (let i = 0; i < end; i++) {
            let [row, col] = queue.pop();
            for (let [x, y] of directions) {
                let newRow = row + x;
                let newCol = col + y;
                if (visited?.[newRow]?.[newCol] === '*') {
                    visited[newRow][newCol] = dist;
                    nextRound.push([newRow, newCol]);
                }
            }
        }
        dist += 1;
        queue = nextRound;
    }
    return visited;
};