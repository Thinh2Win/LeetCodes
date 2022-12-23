/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let n = 1;
            let j = i + 1;
            while (haystack[j] === needle[n] && n < needle.length) {
                j += 1;
                n += 1;
            }
            if (n === needle.length) return i;
        }
    }
    return -1;
};