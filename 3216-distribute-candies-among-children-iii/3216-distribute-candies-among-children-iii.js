/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    const combCount = (sum) => {
        if (sum < 0) return 0n;
        const s = BigInt(sum);
        return ((s + 2n) * (s + 1n)) / 2n;
    };

    const N = BigInt(n);
    const L = BigInt(limit);

    const res = 
        combCount(Number(N))
        - 3n * combCount(Number(N - (L + 1n)))
        + 3n * combCount(Number(N - 2n * (L + 1n)))
        - combCount(Number(N - 3n * (L + 1n)))
    
    if (res <= Number.MAX_SAFE_INTEGER) {
        return Number(res);
    } else {
        return res.toString()
    }
};