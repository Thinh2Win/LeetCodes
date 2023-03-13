/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let hIdx = i;
        let nIdx = 0;
        while (haystack[hIdx] === needle[nIdx]) {
            hIdx += 1;
            nIdx += 1;
            if (nIdx === needle.length) {
                return i;
            }
        }
    }
    return -1;
};