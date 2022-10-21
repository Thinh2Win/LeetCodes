/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
            if (Math.abs(map[nums[i]] - i) <= k) {
                return true;
            } 
        map[nums[i]] = i;
    }
   return false;
};