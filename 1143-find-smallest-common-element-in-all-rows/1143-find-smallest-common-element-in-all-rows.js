/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    let answer = Infinity; 
    const freq = {};
    for (let row of mat) {
        for (let num of row) {
            freq[num] = (freq[num] || 0) + 1;
        }
    }
    for (let num in freq) {
        if (freq[num] === mat.length && num < answer) answer = num;  
    }
    return answer === Infinity ? -1 : +answer;
};