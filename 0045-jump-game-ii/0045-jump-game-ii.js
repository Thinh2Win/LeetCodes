/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let dp = [];
    dp[nums.length - 1] = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= nums.length - 1) {
            dp[i] = 1;
        } else {
            if (nums[i] === 0) {
                dp[i] = Infinity;
                continue;
            }
            let path = dp.slice(i + 1, nums[i] + i + 1);
            dp[i] = Math.min(...path.map(x => x + 1));
        }
    }
    return dp[0];
};