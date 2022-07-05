/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    let L = 0;
    let map = {};
    let maxLength = -Infinity;
    for (var R = 0; R < s.length; R++) {
        if (map[s[R]] === undefined) {
            map[s[R]] = 1;
        } else {
            map[s[R]]++;
            maxLength = Math.max(maxLength, R - L);
            while(map[s[R]] > 1) {
                if (map[s[L]] - 1 === 0) {
                    delete map[s[L]];
                } else {
                    map[s[L]]--;
                }
                L++;
            }
        }
    }
    maxLength = Math.max(maxLength, R - L);
    return maxLength === -Infinity ? 1 : maxLength; 
};