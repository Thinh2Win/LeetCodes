/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let answer = 0;
    let prev = 0;
    let curr = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            curr += 1;
        } else {
            answer += Math.min(curr, prev);
            prev = curr;
            curr = 1;
        }
    }
    return answer += Math.min(curr, prev);
};