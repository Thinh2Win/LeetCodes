/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => b - a);
    let answer = 0;
    for (let i = 1; i < nums.length; i += 2) {
        let prev = nums[i - 1];
        let curr = nums[i];
        answer += Math.min(prev, curr);
    }
    return answer;
};