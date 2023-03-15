/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dp = [];
    dp[nums.length - 1] = true;
    for (let i = dp.length - 2; i >= 0; i--) {
        if (nums[i] === 0) {
            dp[i] = false;
            continue;
        }
        for (let j = 1; j <= nums[i]; j++) {
            if (dp[i + j]) {
                dp[i] = true;
                break;
            } else {
                dp[i] = false;       
            }
        }
    }
    return dp[0];
};