/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let x = i;
        let y = 0;
        while (haystack[x] === needle[y]) {
            if (y === needle.length - 1) {
                return i;
            }
            x += 1;
            y += 1;
        }
    };
    return -1;
};