/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let answer = -1;
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    for (let num in freq) {
        if (freq[num] == num) answer = Math.max(answer, +num);
    }
    return answer;
};