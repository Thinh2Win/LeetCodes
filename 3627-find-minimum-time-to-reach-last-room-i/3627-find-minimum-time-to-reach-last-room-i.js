/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    let n = moveTime.length;
    let m = moveTime[0].length;

    const dp = Array.from({length: n}, () => new Array(m).fill(Infinity));
    dp[0][0] = 0;
    const minQ = new MinPriorityQueue(tuple => tuple[2]); // [row, col, time]
    minQ.enqueue([0,0,0]);

    let directions = [[1,0], [-1,0], [0,1], [0,-1]];

    while (minQ.size()) {
        let [row, col, time] = minQ.dequeue();
        // if we reached end, we know we took the least path to get here, retun 
        if (row === n - 1 && col === m - 1) return time;
        // check 4 directions 
        for (let [x, y] of directions) {
            let newRow = row + x;
            let newCol = col + y;
            if (moveTime?.[newRow]?.[newCol] !== undefined) {
        // if currtime + movetime < the dp time then we push row col and new time into queue
                let newTime = Math.max(time + 1, moveTime[newRow][newCol] + 1);
                if (newTime < dp[newRow][newCol]) {
                    minQ.enqueue([newRow, newCol, newTime]);
                    // set dp at row col to new time    
                    dp[newRow][newCol] = newTime;
                }
            }
        }
    }
};