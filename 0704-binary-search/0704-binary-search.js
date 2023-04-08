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
        let point = nums[mp];
        if (point < target) {
            L = mp + 1;
        } else if (point > target) {
            R = mp;
        } else {
            return mp;
        }
    }
    return nums[L] === target ? L : -1;
};