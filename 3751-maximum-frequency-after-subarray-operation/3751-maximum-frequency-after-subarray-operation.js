/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    let kCount = nums.reduce((acc, num) => {
        if (num === k) acc += 1;
        return acc;
    }, 0);
    let maxGain = 0;
    for (let x = -49; x <= 49; x++) {
        let count = 0;
        let max = 0;
        for (let num of nums) {
            let val = (num + x === k ? 1 : 0) - (num === k ? 1 : 0);
            count = Math.max(val, count + val)
            max = Math.max(max, count);
        }
        maxGain = Math.max(maxGain, max);
    }
    return kCount + maxGain;
};