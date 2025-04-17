/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let freq = {};
    let factors = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!freq[num]) {
            freq[num] = [i];
        } else {
            let indexes = freq[num];
            for (let idx of indexes) {
                factors.push(idx * i);
            }
            freq[num].push(i);
        }
    }
    return factors.filter(num => num % k === 0).length;
};