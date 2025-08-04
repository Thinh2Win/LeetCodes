/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    /*
        - reverse the array
        - reverse each word from start of word to end 
    */

    s.reverse()
    let start = 0;
    s.push(' ')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            let end = i - 1;
            while (start < end) {
                [s[start], s[end]] = [s[end], s[start]];
                start += 1;
                end -= 1;
            }
            start = i + 1;
        }
    }
    s.pop();
};