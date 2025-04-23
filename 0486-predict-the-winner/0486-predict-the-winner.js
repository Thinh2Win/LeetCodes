/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const helper = (left, right) => {
        if (left === right) return nums[right];
        return Math.max(
            nums[left] - helper(left + 1, right),
            nums[right] - helper(left, right - 1)
        )
    }
    return helper(0, nums.length - 1) >= 0;
};