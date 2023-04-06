/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (!nums.length) return '0';
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    if (nums[0] === 0) return '0';
    return nums.join('');
};