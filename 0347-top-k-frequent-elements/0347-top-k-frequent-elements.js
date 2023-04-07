/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequency = {};
    nums.forEach(num => frequency[num] ? frequency[num][1] += 1 : frequency[num] = [num, 1]);
    let arr = Object.values(frequency).sort((a, b) => b[1] - a[1]);
    return arr.slice(0, k).map(freq => freq[0]);
};