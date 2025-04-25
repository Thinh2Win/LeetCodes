/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    /*
        loop through coins 
        2nd loop with i = coin 
        dp[i] = dp[i - coin] + dp[i]

    */

    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = dp[i - coin] + dp[i];
        }
    }
    return dp.at(-1);
};