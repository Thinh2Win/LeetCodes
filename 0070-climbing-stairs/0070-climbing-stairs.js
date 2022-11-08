/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = {};
    const DFS = (diff) => {
    if (diff === 0) {
        return 1;
    }
    if (diff < 0) {
        return 0;
    }
    if (memo[diff] !== undefined) {
        return memo[diff];
    }
    let left = DFS(diff - 1);
    let right = DFS(diff - 2);
    memo[diff] = left + right;
    return memo[diff];
}
    return DFS(n);
};