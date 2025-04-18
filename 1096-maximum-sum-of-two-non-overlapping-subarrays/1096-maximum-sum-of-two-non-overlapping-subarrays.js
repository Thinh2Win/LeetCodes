/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
    /*
        Prefix Sum array to help us quickly find sum of a subarray 
    */
    let preSum = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        preSum[i + 1] = preSum[i] + nums[i];
    }

    function calcSum(i, j) {
        return preSum[j] - preSum[i];
    }

    function best(m, n) {
        let bestM = 0;
        let answer = 0;
        for (let i = m; i + n <= nums.length; i++) {
            bestM = Math.max(bestM, calcSum(i - m, m + i - m));
            answer = Math.max(answer, bestM + calcSum(i, n + i));
        }
        return answer;
    }

    let best1 = best(firstLen, secondLen);
    let best2 = best(secondLen, firstLen);
    return Math.max(best1, best2);
};