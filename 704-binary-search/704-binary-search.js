/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
      let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = Math.floor((hi + lo) / 2);
        if (target > nums[mid]) {
            lo = mid + 1;
        } else {
            hi = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};