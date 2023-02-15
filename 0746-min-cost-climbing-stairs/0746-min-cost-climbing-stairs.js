/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length);
    dp[cost.length - 1] = cost.at(-1);
    dp[cost.length - 2] = cost.at(-2);
    for (let i = cost.length - 3; i >= 0; i--) {
        dp[i] = Math.min(cost[i] + dp[i + 1], cost[i] + dp[i + 2]);
    }
    return Math.min(dp[0], dp[1]);
};