/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = i;
        } else {
            if (Math.abs(map[nums[i]] - i) <= k) {
                return true;
            } else {
                map[nums[i]] = i;
            }
        }
    }
   return false;
};