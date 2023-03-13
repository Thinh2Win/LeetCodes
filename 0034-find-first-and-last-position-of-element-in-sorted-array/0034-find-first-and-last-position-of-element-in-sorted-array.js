/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let answer = [-1, -1];
    let L = 0;
    let R = nums.length - 1;
    while (L < R) {
        let mp = Math.floor((R - L) / 2) + L;
        if (nums[mp] >= target) {
            R = mp;
        } else {
            L = mp + 1;
        }
    }
    if (nums[L] !== target) return answer;
    answer[0] = L;

    R = nums.length - 1;
    while (L < R) {
        let mp = Math.floor((R - L) / 2) + L;
        if (nums[mp] <= target) {
            L = mp + 1;
        } else {
            R = mp;
        }
    }
    answer[1] = nums[L] === target ? L : L - 1;
    return answer;
};