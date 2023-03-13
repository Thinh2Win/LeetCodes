/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let max = 0;
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        map[s[R]] !== undefined ? map[s[R]] += 1 : map[s[R]] = 1;
        while (map[s[R]] > 1) {
            map[s[L]] -= 1;
            L += 1;
        }
        max = Math.max(max, R - L + 1);
    }
    return max;
};