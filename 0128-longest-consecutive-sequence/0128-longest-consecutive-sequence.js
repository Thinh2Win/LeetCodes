/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    let set = new Set(nums);
    let max = 0;
    for (let num of set) {
        if (set.has(num - 1)) continue;
        let currMax = 1;
        let curr = num;
        while (set.has(curr + 1)) {
            currMax += 1;
            curr += 1;
        }
        max = Math.max(max, currMax);
    }
    return max;
};