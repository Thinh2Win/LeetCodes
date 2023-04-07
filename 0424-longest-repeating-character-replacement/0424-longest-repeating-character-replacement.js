/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // sliding window 
    // create L and R pointer 
    // create a map to track letters inside window
    // track most frequent letter 
    // if the size of the window - most frequent letter is > k then we know that there are more unique letters inside our window than allowed 
        // in this case we shrink our window until window - letter is < or equal to k 
    let L = 0;
    let map = {};
    let freq = 0;
    let max = 0;
    for (let R = 0; R < s.length; R++) {
        if (map[s[R]] !== undefined) {
            map[s[R]] += 1;
            freq = Math.max(freq, map[s[R]]);
        } else {
            map[s[R]] = 1;
            freq = Math.max(freq, map[s[R]]);
        }
        while ((R - L + 1) - freq > k) {
            map[s[L]] -= 1;
            L += 1;
            freq = Math.max(...Object.values(map));
        }
        max = Math.max(max, R - L + 1);
    }
    return max;
};