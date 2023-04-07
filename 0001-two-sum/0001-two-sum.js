/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            return [map[nums[i]], i];
        }
        let diff = target - nums[i];
        map[diff] = i;
    }
};