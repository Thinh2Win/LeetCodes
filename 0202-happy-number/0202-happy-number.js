/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {};
    let start = `${n}`.split('').map(num => parseInt(num)**2).reduce((a, b) => a + b, 0);
    while (start !== 1) {
        if (seen[start]) return false;
        seen[start] = true;
        start = `${start}`.split('').map(num => parseInt(num)**2).reduce((a, b) => a + b, 0);
    }
    return start === 1 ? true : false;
};