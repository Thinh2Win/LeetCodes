/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let leftIdx = searchLeft(nums, target);
    let rightIdx = searchRight(nums, target);
    let answer = [-1, -1];
    if (nums[leftIdx] === target) answer[0] = leftIdx;
    if (nums[rightIdx] === target) answer[1] = rightIdx;
    return answer;
};

function searchLeft(nums, target) {
    let L = 0;
    let R = nums.length;

    while (L <= R) {
        let mp = Math.floor((R - L) / 2 + L);
        if (target <= nums[mp]) {
            R = mp - 1;
        } else {
            L = mp + 1;
        }
    }
    return L;
}
function searchRight(nums, target) {
    let L = 0;
    let R = nums.length;

    while (L <= R) {
        let mp = Math.floor((R - L) / 2 + L);
        if (target >= nums[mp]) {
            L = mp + 1;
        } else {
            R = mp - 1;
        }
    }
    return R;
}