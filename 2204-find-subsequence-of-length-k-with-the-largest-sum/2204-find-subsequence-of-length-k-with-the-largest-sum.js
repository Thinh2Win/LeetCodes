/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const arr = nums.map((num, idx) => [num, idx]).sort((a, b) => b[0] - a[0]);
    const answer = [];
    for (let i = 0; i < k; i++) {
        let [num, idx] = arr[i];
        answer[idx] = num;
    }
    return answer.filter(num => num !== undefined);
}; 