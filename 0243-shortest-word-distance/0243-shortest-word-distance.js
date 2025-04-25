/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let idx1 = [];
    let idx2 = [];
    for (let i = 0; i < wordsDict.length; i++) {
        let word = wordsDict[i];
        if (word === word1) idx1.push(i);
        if (word === word2) idx2.push(i);
    } 
    let answer = Infinity;
    for (let num1 of idx1) {
        for (let num2 of idx2) {
            answer = Math.min(answer, Math.abs(num1 - num2));
        }
    }
    return answer;
};