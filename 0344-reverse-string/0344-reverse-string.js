/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let L = 0;
    let R = s.length - 1;
    while (L < R) {
        [s[L], s[R]] = [s[R], s[L]];
        L += 1;
        R -= 1;
    };
};