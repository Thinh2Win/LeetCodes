/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let L = 0; 
    let R = nums.length; 
    let answer = [-1, -1]
    while (L <= R) {
        let mp = Math.floor((R - L) / 2 + L);

        if (nums[mp] >= target) {
            R = mp - 1;
        } else {
            L = mp + 1
        }
    }
    if (nums[L] !== target) return answer; 
    answer[0] = L;
    R = nums.length; 
    while (L <= R) {
        let mp = Math.floor((R - L) / 2 + L);

        if (nums[mp] <= target) {
            L = mp + 1;
        } else {
            R = mp - 1;
        }
    }
    answer[1] = nums[R] === target ? R : answer[0];
    return answer;
};
