/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let lastDay = days.at(-1);
    let trip = new Set(days);
    let dp = new Array(lastDay + 1).fill(0);
    for (let i = 1; i <= lastDay; i++) {
        if (trip.has(i) === false) {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = Math.min(dp[i - 1] + costs[0], dp[Math.max(i - 7, 0)] + costs[1], dp[Math.max(i - 30, 0)] + costs[2]);
        }
    }
    return dp[lastDay];
};