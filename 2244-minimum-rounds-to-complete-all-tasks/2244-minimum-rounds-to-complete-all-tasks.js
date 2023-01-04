/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let map = {};
    tasks.forEach(task => map[task] ? map[task] += 1 : map[task] = 1);
    let dp = [0, 0, 1, 1, 2];
    let idx = 5; 
    let amount = Object.values(map);
    if (amount.some(num => num === 1)) return -1;
    let max = Math.max(...amount);
    while (idx <= max) {
        dp[idx] = dp[idx - 3] + 1;
        idx += 1;
    }
    let count = 0;
    amount.forEach(group => {
       count += dp[group]; 
    });
    return count;
};