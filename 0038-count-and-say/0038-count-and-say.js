/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n, string = '1', times = 1) {
    if  (times === n) return string;
    let characters = string.split('');
    let i = 0;
    let answer = [];
    while (i < string.length) {
        let count = 1;
        while (string[i + 1] === string[i]) {
            i += 1;
            count += 1;
        }
        answer.push(count, string[i]);
        i += 1;
    }
    return countAndSay(n, answer.join(''), times + 1);
};