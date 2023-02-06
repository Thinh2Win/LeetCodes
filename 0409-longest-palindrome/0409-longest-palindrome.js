/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let length = 0;
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            length += 2;
            set.delete(s[i]);
        } else {
            set.add(s[i]);
        }
    }
    return set.size > 0 ? length + 1 : length; 
};