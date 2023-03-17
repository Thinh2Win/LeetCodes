/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    let map = {};
    nums.forEach(num => {
        map[num - 1] ? map[num - 1].push(num) : map[num - 1] = [num];
        map[num + 1] ? map[num + 1].push(num) : map[num + 1] = [num];
    });
    let seen = {};
    let max = 1;
    let depth = 1;
    const DFS = (num) => {
        if (seen[num]) return;
        seen[num] = true;
        max = Math.max(max, depth);
        let connections = map[num] || [];
        for (let j = 0; j < connections.length; j++) {
            if (seen[connections[j]]) continue;
            depth += 1
            DFS(connections[j]);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) continue;
        depth = 1;
        DFS(nums[i]);
    };
    return max;
};