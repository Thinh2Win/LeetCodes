/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dp = new Array(n).fill(Infinity);
    dp[src] = 0;
    for (let i = 0; i <= k; i++) {
        let temp = [...dp];
        for (let [start, end, cost] of flights) {
            if (dp[start] !== Infinity) {
                // possible to fly 
                temp[end] = Math.min(temp[end], dp[start] + cost);
            }
        }
        dp = temp;
    }
    return dp[dst] === Infinity ? -1 : dp[dst];
};