/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    nums.forEach(num => map[num] ? map[num][1] += 1 : map[num] = [num, 1]);
    let mostFrequent = Object.values(map).sort((a, b) => b[1] - a[1]);
    return mostFrequent.slice(0, k).map(value => value[0]);
};