/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target, memo = new Map()) {
        if (n === 0 && target === 0) {
        return 1;
    }
    if (n === 0 || target <= 0) {
        return 0;
    }
    if (memo.has(`${n}-${target}`)) {
        return memo.get(`${n}-${target}`);
    }
    let count = 0, M = Math.pow(10, 9) + 7;
    for (let i = 1; i <= k; i++) {
        count = (count + numRollsToTarget(n-1, k, target - i, memo)) % M;
    }
    memo.set(`${n}-${target}`, count);
    return count;
};