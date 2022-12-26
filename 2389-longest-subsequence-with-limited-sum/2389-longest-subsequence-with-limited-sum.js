/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a - b);
    let answer = new Array(queries.length).fill(0);
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i] + dp[i - 1];
    };
    for (let j = 0; j < queries.length; j++) {
        for (let k = 0; k < dp.length; k++) {
            if (dp[k] > queries[j]) {
                answer[j] = k;
                break;
            }
            if (k === dp.length - 1) {
                answer[j] = k + 1;
            }
        }
    }
    return answer;
};