/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function(n) {
    const map = {
        0: 0,
        1: 1,
        2: 1,
        3: 2,
    };
    if (n <= 3) return map[n];
    let i = 3;
    while ( i !== n + 1) {
        map[i] = map[i - 1] + map[i - 2] + map[i - 3];
        i += 1;
    }
    return map[n];
};