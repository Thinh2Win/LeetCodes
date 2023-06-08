/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let map = {
        1: 1,
        2: 2,
        3: 3,
    }
    if (map[n]) return map[n];
    let step = 4;
    while (step <= n) {
        map[step] = map[step - 1] + map[step - 2];
        step += 1;
    }
    return map[n];
};