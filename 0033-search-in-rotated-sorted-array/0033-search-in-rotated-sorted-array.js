/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0; 
    let R = nums.length - 1;
    while (L < R) {
        let mp = Math.floor((R - L) / 2) + L;
        if (nums[L] <= nums[mp]) {
            if (target >= nums[L] && target <= nums[mp]) {
                R = mp;
            } else {
                L = mp + 1;
            }
        } else {
            if (target > nums[mp] && target <= nums[R]) {
                L = mp + 1;
            } else {
                R = mp;
            }
        }
    }
    return nums[L] === target ? L : -1;
};