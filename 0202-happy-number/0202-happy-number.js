/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {};
    let curr = n;
    while (true) {
        let arr = `${curr}`.split('');
        let total = arr.map(num => (+num)**2).reduce((a, b) => a + b);
        if (total === 1) return true;
        if (seen[total]) return false;
        seen[total] = true;
        curr = total;
    };
};