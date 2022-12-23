/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let memo = {};
    const DFS = (idx, boughtStock) => {
        if (idx >= prices.length) {
            return 0;
        }
        let currStock = prices[idx];
        let key = `${idx},${boughtStock}`;
        if (key in memo) return memo[key]; 
        
        let coolDown = DFS(idx + 1, boughtStock);
        let buying = !boughtStock ? -prices[idx] + DFS(idx + 1, true) : 0;
        let selling = boughtStock ? prices[idx] + DFS(idx + 2, false) : 0;
        let profit = Math.max(coolDown, buying, selling);
        memo[key] = profit;
        return profit; 
    }
    return DFS(0, false);
};