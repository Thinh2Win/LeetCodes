/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // sliding window 
    // create L and R pointer 
    // create a map to keep track of letters in our window 
    // if a letter is ever greater than or equal to 2 
    // we need to shrink our window until that letter is less than 2
    // keep track of longest window length 
    let max = 0;
    let L = 0;
    let map = {};
    for (let R = 0; R < s.length; R++) {
        let char = s[R];
        map[char] !== undefined ? map[char] += 1 : map[char] = 1;
        while (map[char] >= 2) {
            map[s[L]] -= 1;
            L += 1;
        }
        max = Math.max(max, R - L + 1);
    }
    return max;
};