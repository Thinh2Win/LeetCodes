/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let minMax = nums[0];
    let total = nums[0];
    for (let i = 1; i < nums.length; i++) {
        total += nums[i];
        minMax = Math.max(minMax, Math.ceil(total / (i + 1)));
    };
    return minMax;
};