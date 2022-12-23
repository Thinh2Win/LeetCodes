/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) return [-1, -1];
    let L = 0; 
    let R = nums.length;
    let idx = null;
    while (L < R) {
        let mp = L + Math.floor((R - L) / 2);
        if (target < nums[mp]) {
            R = mp;
        } else if (target > nums[mp]) {
            L = mp + 1;
        } else {
            // mp is target 
            idx = mp;
            break;
        }
    }
    if (idx === null) return [-1, -1];
    let left = idx - 1;
    let right = idx + 1;
    while (nums[left] === target || nums[right] === target) {
        if (nums[left] === target) left -= 1;
        if (nums[right] === target) right += 1;
    }
    return [left + 1, right - 1];
};