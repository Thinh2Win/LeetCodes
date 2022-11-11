/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let L = 1;
    while (nums[L] !== nums[L - 1]) {
        L += 1;
    }
    let currentNum = nums[L];
    for (let R = L + 1; R < nums.length; R++) {
        if (currentNum !== nums[R]) {
            [nums[L], nums[R]] = [nums[R], nums[L]];
            currentNum = nums[L];
            L += 1;
        }
    }
    return L;
};