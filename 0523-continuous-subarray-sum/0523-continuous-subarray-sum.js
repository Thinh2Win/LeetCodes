/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let map = {
        0: -1,
    };
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        let modulo = currentSum % k;
        if (map[modulo] === undefined) {
            map[modulo] = i;
        } else {
            if (Math.abs(map[modulo] - i) > 1) {
                return true;
            }
        }
    }
    return false;
};