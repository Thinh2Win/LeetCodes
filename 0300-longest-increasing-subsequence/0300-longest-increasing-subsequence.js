/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length);
    dp[dp.length - 1] = 1;
    for (let i = dp.length - 2; i >= 0; i--) {
        let max = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                max = Math.max(max, dp[j] + 1);
            }
        }
        dp[i] = max;
    }
    return Math.max(...dp);
};