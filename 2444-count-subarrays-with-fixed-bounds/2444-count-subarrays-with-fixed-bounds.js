/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let count = 0;
    let start = 0;
    let minStart = 0;
    let maxStart = 0;
    let minF = false;
    let maxF = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            minF = false;
            maxF = false;
            start = i + 1;
        }
        if (nums[i] === minK) {
            minStart = i;
            minF = true;
        }
        if (nums[i] === maxK) {
            maxStart = i;
            maxF = true;
        }
        if (maxF && minF) {
            count += Math.min(minStart, maxStart) - start + 1
        }
    }
    return count;
};