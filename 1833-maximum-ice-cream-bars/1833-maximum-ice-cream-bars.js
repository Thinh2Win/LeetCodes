/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a - b);
    let i = 0;
    let count = 0;
    while (coins - costs[i] > -1) {
        coins -= costs[i];
        count += 1;
        i += 1;
    }
    return count;
};