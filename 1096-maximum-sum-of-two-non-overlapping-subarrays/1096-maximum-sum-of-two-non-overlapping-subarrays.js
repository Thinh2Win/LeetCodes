/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    let preSum = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        preSum[i + 1] = preSum[i] + nums[i];
    }
    const subSum = (i, j) => preSum[i + j] - preSum[i];

    function best(m, n) {
        let bestM = 0;
        let ans = 0;
        for (let i = m; i + n <= nums.length; i++) {
            bestM = Math.max(bestM, subSum(i - m, m));
            ans = Math.max(ans, bestM + subSum(i, n))
        }
        return ans;
    }
    let best1 = best(firstLen, secondLen);
    let best2 = best(secondLen, firstLen);
    return Math.max(best1, best2);
};