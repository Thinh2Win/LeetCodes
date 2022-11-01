/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let string = '$' + s.split('').join('$') + '$';
    let longest = -Infinity;
    let answer = '';
    for (let i = 1; i < string.length; i++) {
        let L = i - 1;
        let R = i + 1;
        let stringLength = 0;
        while (string[L] === string[R] && string[L] !== undefined && string[R] !== undefined) {
            stringLength += 2;
            L -= 1;
            R += 1;
        }
        if (stringLength > longest) {
            longest = stringLength;
            answer = string.slice(L + 1, R - 1).split('$').join('');
        }
    }
    return answer;
};