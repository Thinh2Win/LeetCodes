/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let string = '-' + s.split('').join('-') + '-';
    let answer = '';
    for (let i = 0; i < string.length; i++) {
        let L = i - 1;
        let R = i + 1;
        while (L >= 0 && string[L] === string[R]) {
            L -= 1;
            R += 1;
        }
        let substring = string.slice(L + 1, R);
        if (substring.length > answer.length) {
            answer = substring;
        }
    }
    return answer.split('-').join('');
};