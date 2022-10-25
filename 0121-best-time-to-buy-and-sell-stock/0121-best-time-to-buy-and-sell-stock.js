/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = -Infinity;
    let currentMin = prices[0];
    for (let i = 1; i < prices.length; i++) {
        currentMin = Math.min(currentMin, prices[i]);
        profit = Math.max(profit, prices[i] - currentMin);
    }
    return profit === -Infinity ? 0 : profit;
};