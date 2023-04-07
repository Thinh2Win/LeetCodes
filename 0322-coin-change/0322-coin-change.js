/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
      // 0 1 2 3 4 5 6 7 8 9 10 11
    //  [0 0 0 0 0 0 0 0 0 0  0  0 ]
    //  [0 1 2 3 4 5 6 7 8 9  10  11 ]    1
    //  [0 1 1 2 2 3 3 4 4 5  5  6 ]      2  (dp[i] = dp[i - coin] + 1)
    //  [0 1 1 2 2 1 2 2 3 3  2  3 ]      5 (if coin > i continue)
    if (amount === 0) return 0;
    coins.sort((a, b) => a - b);
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    coins.forEach(coin => {
         for (let i = 1; i < dp.length; i++) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i]);   
            }
         }
    });
    return dp.at(-1) === Infinity ? -1 : dp.at(-1);
};