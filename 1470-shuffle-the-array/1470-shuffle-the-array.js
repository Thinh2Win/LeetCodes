/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let xHalf = nums.slice(0, n);
    let yHalf = nums.slice(n);
    let answer = [];
    for (let i = 0; i < xHalf.length; i++) {
        answer.push(xHalf[i]);
        answer.push(yHalf[i]);
    }
    return answer;
};