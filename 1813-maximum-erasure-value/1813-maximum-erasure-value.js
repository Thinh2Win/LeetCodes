/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    /*
        Want the longest contiguous subarray with unique values
        sliding window 
    */
    const map = {};
    let L = 0;
    let maxSum = 0;
    let windowSum = 0;
    for (let R = 0; R < nums.length; R++) {
        windowSum += nums[R];
        map[nums[R]] = (map[nums[R]] || 0) + 1;
        while (map[nums[R]] > 1) {
            windowSum -= nums[L];
            map[nums[L]] -= 1;
            L += 1;
        }
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
};