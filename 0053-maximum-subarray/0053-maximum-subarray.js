/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if (currSum < nums[i]) {
            currSum = nums[i];
        }
        max = Math.max(max, currSum);
    };
    return max;
};