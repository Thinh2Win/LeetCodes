/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set(nums);
    const answer = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) answer.push(i);
    }
    return answer;
};