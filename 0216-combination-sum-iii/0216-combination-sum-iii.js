/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    // find all combos of k length from nums 1 - 9 that sum up to n 
    // ex. k = 3 n = 7
    // 1 + 2 + 4 = 7 and are of length k = 3
    // recursion 
    let answer = [];
    const recurse = (nums, sum, currNum) => {
        if (sum > n || currNum > 9) return;
        if (nums.length === k) {
            if (sum === n) answer.push([...nums]);
            return;
        }
        recurse([...nums, currNum + 1], sum + currNum + 1, currNum + 1)
        recurse([...nums], sum, currNum + 1)
    };
    recurse([], 0, 0);
    return answer;
};