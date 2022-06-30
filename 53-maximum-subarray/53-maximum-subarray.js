/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let left = 0;
    let sum = -Infinity; 
    for (let r = 0; r < nums.length; r++) {
        left = Math.max(left + nums[r], nums[r]);
        sum = Math.max(sum, left);
    } 
    return sum;
};