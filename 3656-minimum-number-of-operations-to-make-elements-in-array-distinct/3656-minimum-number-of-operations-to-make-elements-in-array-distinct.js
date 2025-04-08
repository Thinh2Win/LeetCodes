/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let copy = nums;
    let ops = 0;
    let idx = 0;
    while (copy.length && copy.length !== new Set(copy).size) {
        idx += 3;
        ops += 1;
        copy = nums.slice(idx);
    }
    return ops;
};