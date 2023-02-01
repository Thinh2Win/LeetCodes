/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let answer = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let last = answer.at(-1);
        answer.push(last + nums[i]);
    }
    return answer;
};