/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let map = {0: 0, 1: 1};
    let i = 2;
    if (map[n]) return map[n];
    while (i <= n) {
        map[i] = map[i - 1] + map[i - 2];
        i += 1;
    };
    return map[n];
};