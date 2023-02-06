/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (t.length < s.length) return false;
    let pointer = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[pointer] === t[i]) {
            pointer += 1;
        }
    }
    return pointer === s.length ? true : false;
};