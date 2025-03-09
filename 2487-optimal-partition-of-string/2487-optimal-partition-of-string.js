/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  // abacaba -> ab ac ab a
  // sliding window 
  // keep track of letters inside window 
  // when we reach a dupe we move the L pointer to R 
  // increase count to represent substrings 
    let freq = {};
    let count = 0;
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        let char = s[R];
        freq[char] ? freq[char] += 1 : freq[char] = 1;
        if (freq[char] >= 2) {
            while (L !== R) {
                freq[s[L]] -= 1;
                L += 1;
            }
            count += 1;
        };
    } 
    // count substring at end
    return count + 1;
};