/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    if (nums.length === 1) return nums[0];
    let cycle = [...nums, ...nums];
    let L = 0;
    let curr = 0;
    let max = -Infinity;
    for (let R = 0; R < cycle.length; R++) {
        curr += cycle[R];
        if (R - L === nums.length) {
            curr -= cycle[L];
            let tSum = curr;
            let lTemp = L++;
            while(lTemp < R) {
                max = Math.max(max, tSum)
                tSum -= cycle[lTemp];
                lTemp += 1;
            }
        };
        max = Math.max(curr, max)
        if (0 >= curr) {
            curr = 0;
            L = R+1;
        }
    }
    return max;
};