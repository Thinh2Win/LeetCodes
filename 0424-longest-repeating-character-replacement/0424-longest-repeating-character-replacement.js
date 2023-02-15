/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let freqChar = 0;
    let L = 0;
    let map = {};
    let max = -Infinity;
    for (var R = 0; R < s.length; R++) {
        if (map[s[R]] === undefined) {
            map[s[R]] = 1;
        } else {
            map[s[R]] += 1;
        }
        freqChar = Math.max(freqChar, map[s[R]]);
        while (R - L - freqChar + 1 > k) {
            map[s[L]] -= 1;
            L += 1;
        }
        max = Math.max(max, R - L + 1);
    }
    return max === -Infinity ? s.length : max;
};