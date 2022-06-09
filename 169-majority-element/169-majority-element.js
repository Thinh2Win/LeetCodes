/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    nums.forEach(number => {
        if (!map[number]) {
            map[number] = 1;
        } else {
            map[number] += 1;
        }
    });
    let majority = nums[0];
    for (let keys in map) {
        if (map[keys] >= map[majority]) {
            majority = keys;
        }
    }
    return majority;
    
};