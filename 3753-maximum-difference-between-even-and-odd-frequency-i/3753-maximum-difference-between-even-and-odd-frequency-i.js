/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let map = {};
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    let even = Infinity;
    let odd = 0;

    for (let char in map) {
        let freq = map[char];
        if (freq % 2 === 0) even = Math.min(even, freq)
        else odd = Math.max(odd, freq);
    }

    return odd - even;
};