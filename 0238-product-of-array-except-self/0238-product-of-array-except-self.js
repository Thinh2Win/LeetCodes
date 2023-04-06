/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let dp = new Array(nums.length).fill(1);
    let L = 0;
    let leftProduct = 1;
    let R = nums.length - 1;
    let rightProduct = 1;
    while (L < nums.length) {
        dp[L] *= leftProduct;
        leftProduct *= nums[L];
        L += 1;
        dp[R] *= rightProduct;
        rightProduct *= nums[R];
        R -= 1;
    }
    return dp;
};