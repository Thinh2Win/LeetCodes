/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {};
    let curr = n;
    while (true) {
        let arr = `${curr}`.split('');
        let total = 0;
        arr.forEach(num => total += (+num)**2);
        if (total === 1) return true;
        if (seen[total]) return false;
        seen[total] = true;
        curr = total;
    };
};