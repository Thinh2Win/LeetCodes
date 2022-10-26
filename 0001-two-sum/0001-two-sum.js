/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (map[difference] === undefined) {
            map[difference] = i;
        } 
        if (map[nums[i]] !== undefined && i !== map[nums[i]]) {
            return [map[nums[i]], i];
        }
    }
};