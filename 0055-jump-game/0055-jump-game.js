/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dp = new Array(nums.length).fill(false);
    dp[dp.length - 1] = true;
    let recTrue = dp.length - 1;
    for (let i = dp.length - 2; i >= 0; i--) {
        if (recTrue - i <= nums[i]) {
            dp[i] = true; 
            recTrue = i;
        } 
    }
    return dp[0];
};