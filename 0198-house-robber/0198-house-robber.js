/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];
    let dp = new Array(n).fill(0);
    dp[n - 1] = nums[n - 1];
    dp[n - 2] = Math.max(nums[n - 1], nums[n - 2]);
    dp.push(0);
    for (let i = n - 3; i >= 0; i--) {
        dp[i] = nums[i] + Math.max(dp[i + 2], dp[i + 3]);
    }
    return Math.max(dp[0], dp[1]);
};