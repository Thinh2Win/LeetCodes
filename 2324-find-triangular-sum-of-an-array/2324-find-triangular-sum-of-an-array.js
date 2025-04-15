/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    if (nums.length === 1) return nums[0];
    const next = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = (nums[i] + nums[i + 1]) % 10;
        next.push(sum);
    }
    return triangularSum(next);
};