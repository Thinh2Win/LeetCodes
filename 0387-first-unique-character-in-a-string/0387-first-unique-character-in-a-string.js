/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    s.split('').forEach(char => map[char] ? map[char] += 1 : map[char] = 1);
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
};