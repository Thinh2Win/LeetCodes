/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let combos = new Array(amount + 1).fill(Infinity);
    combos[0] = 0;    
    coins.forEach(coin => {
        for (let i = 1; i <= amount; i++) {
            if (i >= coin) {
                combos[i] = Math.min(combos[i], 1 + combos[i - coin]);
            }
        }
    });
    return combos[amount] === Infinity ? -1 : combos[amount];
};