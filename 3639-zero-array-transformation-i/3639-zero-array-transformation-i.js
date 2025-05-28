/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const diff = new Array(nums.length + 1).fill(0);
    for (let [i1, i2] of queries) {
        diff[i1] += -1;
        diff[i2 + 1] += 1;
    }

    let acc = 0;

    for (let i = 0; i < nums.length; i++) {
        acc += diff[i];
        nums[i] += acc;
        if (nums[i] > 0) return false;
    }

    return true;
};