/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let min = Math.max(...weights);
    let max = weights.reduce((a, b) => a + b);
    let L = min;
    let R = max;
    while (L < R) {
        let mp = Math.floor((R + L) / 2);
        let nDays = daysItTakes(mp, weights);
        if (nDays <= days) {
            R = mp;
        } else {
            L = mp + 1;
        }
    }
    return L;
};

function daysItTakes(capacity, weights) {
    let weight = 0;
    let days = 1;
    for (let i = 0; i < weights.length; i++) {
        weight += weights[i];
        if (weight > capacity) {
            weight = weights[i];
            days += 1;
        }
    }
    return days;
}