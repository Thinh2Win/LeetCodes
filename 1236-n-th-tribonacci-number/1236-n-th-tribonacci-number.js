/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let map = {0: 0, 1: 1, 2: 1}
    for (let i = 3; i <= n; i++) {
        map[i] = map[i - 3] + map[i - 2] + map[i - 1];
    }
    return map[n];
};