/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0;
    let R = nums.length;
    while (L < R) {
        let mp = L + Math.floor((R - L) / 2);
        if (target < nums[mp]) {
            R = mp;
        } else if (target > nums[mp]) {
            L = mp + 1;
        } else {
            return mp;
        }
    }
    return -1;
};