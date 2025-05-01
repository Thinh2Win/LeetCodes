/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let curr = 0;
    for (let char of nums) {
        if (char === 1) curr += 1;
        if (char === 0) curr = 0;
        count = Math.max(count, curr);
    }
    return count;
};