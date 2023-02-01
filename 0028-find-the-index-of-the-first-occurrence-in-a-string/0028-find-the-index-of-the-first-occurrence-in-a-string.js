/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let j = i;
        let k = 0;
        while (haystack[j] && haystack[j] === needle[k]) {
            j += 1;
            k += 1;
        }
        if (j - i === needle.length) return i;
    }
    return -1;
};