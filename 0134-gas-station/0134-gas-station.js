/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let gTot = 0;
    let cTot = 0;
    cost.forEach((x, idx) => {
       gTot += gas[idx];
        cTot += x;
    });
    if (gTot < cTot) return -1;
    let total = 0;
    let least = 0;
    let start = 0; 
    gas.forEach((station, idx) => {
        total += station;
        total -= cost[idx];
        if (total < least) {
            least = total;
            start = idx + 1;
        }
    });
    return start;
};