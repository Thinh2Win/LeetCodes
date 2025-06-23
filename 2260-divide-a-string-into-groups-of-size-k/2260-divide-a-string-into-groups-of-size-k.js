/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let answer = [];
    let currStr = '';
    for (let i = 0; i < s.length; i++) {
        currStr += s[i];
        if (currStr.length === k) answer.push(currStr), currStr = '';
    }
    if (currStr.length) {
        let rem = k - currStr.length;
        for (let i = 0; i < rem; i++) {
            currStr += fill;
        }
        answer.push(currStr);
    }
    return answer;
};