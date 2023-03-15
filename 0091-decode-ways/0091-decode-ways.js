/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') return 0;
    let nums = s.split('');
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === '0') {
            if (nums[i + 1] === '0') return 0;
            nums[i - 1] += '0';
            if (+(nums[i - 1]) > 26) return 0;
            nums.splice(i, 1);
        }
    }
    let dp = new Array(nums.length + 1).fill(0);
    dp[dp.length - 1] = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        if (+(nums[j] + nums[j + 1]) <= 26) {
            dp[j] += dp[j + 2];
        }  
            dp[j] += dp[j + 1];
    }
    return dp[0];
};