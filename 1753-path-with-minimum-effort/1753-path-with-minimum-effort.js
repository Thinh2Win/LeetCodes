/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    /*
       dijkstras algo 
        - finds shortest path of a weighted graph 
        - 2d distance array 
        - min queue 

        starting square is 0 effort so we'd have [0, 0, 0] in our queue [row, col, weight]
        check 4 directions, if the effort to go to the square is less than the distance array 
        we push those coordinates into the queue 
        keep popping from our queue until we reach the end 
    */

    let m = heights.length;
    let n = heights[0].length;
    let directions = [[0,1],[0,-1],[1,0],[-1,0]];

    let dp = Array.from({length: m}, () => new Array(n).fill(Infinity));
    dp[0][0] = 0;
    let minQ = new MinPriorityQueue(tuple => tuple[2]);
    minQ.enqueue([0,0,0]);
    while (minQ.size()) {
        let [row, col, weight] = minQ.dequeue();
        if (row === m - 1 && col === n - 1) return weight;
        for (let [x, y] of directions) {
            let newRow = row + x;
            let newCol = col + y;
            if (heights?.[newRow]?.[newCol]) {
                let h1 = heights[row][col];
                let h2 = heights[newRow][newCol];
                let newWeight = Math.max(weight, Math.abs(h1 - h2));
                if (newWeight < dp[newRow][newCol]) {
                    dp[newRow][newCol] = newWeight;
                    minQ.enqueue([newRow, newCol, newWeight]);
                } 
            }
        }
    }
};