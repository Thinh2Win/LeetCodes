/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0; 
    let start = 0; 
    let map = {};
    for (var end = 0; end < s.length; end++) {
        if (map[s[end]] === undefined) {
            map[s[end]] = 1;
        } else {
            map[s[end]] += 1;
        }
        while (map[s[end]] >= 2) {
            max = Math.max(max, end - start - 1);
            map[s[start]] -= 1; 
            if (map[s[start]] === 0) {
                delete(map[s[start]]);
            }
            start += 1; 
        }
        max = Math.max(max, end - start + 1)
    }
    return max;
};