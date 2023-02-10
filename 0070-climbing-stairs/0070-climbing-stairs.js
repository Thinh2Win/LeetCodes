/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let map = {1: 1, 2: 2};
    if (map[n]) return map[n];
    let i = 3;
    while (i <= n) {
        map[i] = map[i - 1] + map[i - 2];
        i += 1;
    }
    return map[n];
};