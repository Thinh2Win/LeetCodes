/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let string = '$' + s.split('').join('$') + '$';
    let longest = [-Infinity, null];
    for (let i = 1; i < string.length; i++) {
        let L = i - 1;
        let R = i + 1;
        let length = 1;
        while (string[L] === string[R] && string[L]) {
            L -= 1;
            R += 1;
            length += 1;
        }
        if (length > longest[0]) {
            longest[1] = string.substring(L + 1, R);
            longest[0] = length;
        }
    }
    return longest[1].split('$').join('');
};