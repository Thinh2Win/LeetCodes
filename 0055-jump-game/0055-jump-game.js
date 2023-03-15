/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dp = new Array(nums.length).fill(false);
    dp[nums.length - 1] = true;
    let jump = nums.length - 1;
    for (let i = dp.length - 2; i >= 0; i--) {
        if (jump - i <= nums[i]) {
            dp[i] = true;
            jump = i;
        }
    }
    return dp[0];
};