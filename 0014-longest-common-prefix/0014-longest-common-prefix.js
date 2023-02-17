/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = '';
    let longest = '';
    strs.forEach((string, idx) => {
        if (string.length > longest.length) {
            longest = string;
        };
    });
    for (let i = 0; i < longest.length; i++) {
        if (strs.every(s => s[i] === longest[i])) {
            answer += longest[i];
        } else {
            break;
        }
    }
    return answer;
};