/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let flips = 0;
    let seenOnes = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            flips = Math.min(flips + 1, seenOnes);
        } else {
            seenOnes += 1;
        }
    }
    return flips;
};