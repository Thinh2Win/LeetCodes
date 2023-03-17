/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = gas.reduce((a, b) => a + b, 0);
    let totalDistance = cost.reduce((a, b) => a + b, 0);
    if (totalGas < totalDistance) return -1;
    let min = [Infinity, null];
    let curr = 0;
    for (let i = 0; i < gas.length; i++) {
        curr += gas[i];
        curr -= cost[i];
        if (curr < min[0]) {
            min[0] = curr;
            min[1] = i + 1 === gas.length ? 0 : i + 1;
        }
    }
    return min[1];
};