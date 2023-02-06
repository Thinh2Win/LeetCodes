/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let answer = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        answer = Math.max(prices[i] - min, answer);
    }
    return answer;
};