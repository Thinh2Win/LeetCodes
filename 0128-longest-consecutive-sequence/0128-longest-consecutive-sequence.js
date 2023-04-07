/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = {};
    nums.forEach(num => map[num] = true);
    let visited = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let curr = nums[i];
        if (visited[curr]) continue;
        while (map[curr - 1]) {
            curr -= 1;
        }
        while (map[curr]) {
            count += 1;
            visited[curr] = true;
            curr += 1;
        }
        max = Math.max(max, count);
    }
    return max;
};