/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let ways = new Array(amount + 1).fill(Infinity);
    ways[0] = 0;
    coins.forEach(coin => {
        for(let i = coin; i < ways.length; i++) {
            ways[i] = Math.min(ways[i], 1 + ways[i - coin]);
        }
    });
    return ways[amount] === Infinity ? -1 : ways[amount];

};