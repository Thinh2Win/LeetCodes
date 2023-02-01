/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let longest = 0;
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        if (map[s[R]]) {
            while (map[s[R]]) {
                map[s[L]] = 0;
                L += 1;
            }
        } 
        map[s[R]] = 1;
        longest = Math.max(longest, R + 1 - L);
    }
    return longest;
};