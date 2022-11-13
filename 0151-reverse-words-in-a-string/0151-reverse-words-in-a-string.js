/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = [];
    s.split(' ').forEach(string => {
       if (string[0]) {
           words.unshift(string)
       } 
    });
    return words.join(' ')
};