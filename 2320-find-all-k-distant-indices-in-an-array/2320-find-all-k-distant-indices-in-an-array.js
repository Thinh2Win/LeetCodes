/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let answer = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            for (let j = i - k; j <= i + k; j++) {
                if (j >= 0 && j < nums.length) answer.add(j);
            }
        }
    }
    return Array.from(answer);
};