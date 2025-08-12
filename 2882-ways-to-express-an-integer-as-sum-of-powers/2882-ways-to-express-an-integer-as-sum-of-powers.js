/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function(n, x) {

  const MOD = 1_000_000_007;
  const powers = [];
  for (let k = 1; ; k++) {
    const p = k ** x;
    if (p > n) break;
    powers.push(p);
  }

  const memo = new Map(); // key: i|remain

  function dfs(i, remain) {
    if (remain === 0) return 1;
    if (remain < 0 || i === powers.length) return 0;
    const key = i + '|' + remain;
    if (memo.has(key)) return memo.get(key);
    const res = (dfs(i + 1, remain) + dfs(i + 1, remain - powers[i])) % MOD;
    memo.set(key, res);
    return res;
  }

  return dfs(0, n);


};