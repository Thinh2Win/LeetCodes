/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = [0, ''];
    let string = `*${s.split('').join('*')}*`;
    for (let i = 1; i < string.length; i++) {
        let L = i - 1;
        let R = i + 1;
        let count = 1;
        while (string[L] === string[R] && L >= 0) {
            count += 2;
            L -= 1;
            R += 1;
        };
        if (Math.floor(count / 2) > longest[0]) {
            longest[0] = Math.floor(count / 2);
          longest[1] = string.split('').slice(L + 1, R - 1).join('').split('*').join('');  
        } 
    }
    return longest[1];
};