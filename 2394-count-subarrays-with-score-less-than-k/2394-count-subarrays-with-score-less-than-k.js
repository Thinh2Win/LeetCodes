/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {

    let L = 0;
    let count = 0;
    let windowSum = 0;

    for (let R = 0; R < nums.length; R++) {
        windowSum += nums[R];
        while(windowSum * (R - L + 1) >= k) {
            windowSum -= nums[L];
            L += 1;
        }
        count += (R - L + 1); // if we're tracking subarrays we can just add window length
    }
    return count;
};