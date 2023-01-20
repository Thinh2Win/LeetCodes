/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let answer = new Set();
    const DFS = (idx, arr, greatest) => {
        if (idx === nums.length) {
            let copy = arr.slice();
            if (copy.length >= 2) {
                answer.add(JSON.stringify(copy));   
            }
            return;
        }
        
        if (nums[idx] >= greatest) {
            DFS(idx + 1, [...arr, nums[idx]], nums[idx]);
        }
        DFS(idx + 1, arr, greatest);
    }
    DFS(1, [], -Infinity);
    DFS(1, [nums[0]], nums[0]);
    return [...answer].map(set => JSON.parse(set));
};