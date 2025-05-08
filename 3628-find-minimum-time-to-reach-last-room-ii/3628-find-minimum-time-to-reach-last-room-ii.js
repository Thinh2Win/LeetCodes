/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    /*
        create dp array to track min time at room 
        create min queue to track curr room and time 
        add starting point to queue [row, col, time, alt time]
        use our queue to travel path with min amount of time 
        check 4 directions, if the square exists and the time is less than the dp time
        we can add new square to our queue 
        when we reach the last square we can return the time  
    */

    const n = moveTime.length;
    const m = moveTime[0].length;

    const dp = Array.from({length: n}, () => new Array(m).fill(Infinity));
    dp[0][0] = 0; 
    const minQ = new MinPriorityQueue(quple => quple[2]);
    minQ.enqueue([0, 0, 0, 1]);

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    while (minQ.size()) {
        let [row, col, time, altTime] = minQ.dequeue();
        if (row === n - 1 && col === m - 1) return time;
        for (let [x, y] of directions) {
            let newRow = row + x;
            let newCol = col + y;

            if (moveTime?.[newRow]?.[newCol] !== undefined) {
                let newTime = Math.max(time + altTime, moveTime[newRow][newCol] + altTime);
                if (newTime < dp[newRow][newCol]) {
                    minQ.enqueue([newRow, newCol, newTime, altTime === 1 ? 2 : 1]);
                    dp[newRow][newCol] = newTime;
                }
            }
        }
    }
};