/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length <= 2) return Math.max(...nums)
    let dp = new Array(nums.length).fill(0);
    dp[nums.length - 1] = nums.at(-1);
    dp[nums.length - 2] = nums.at(-2);
    dp[nums.length - 3] = nums.at(-1) + nums.at(-3);
    let max = Math.max(nums.at(-1), nums.at(-2), dp.at(-3));
    if (nums.length === 3) return max;
    for (let i = nums.length - 4; i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2], nums[i] + dp[i + 3]);
        max = Math.max(max, dp[i]);
    }
    return max;
};