/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    /*
        even idxs must be even numbers 
        odd idxs must be prime numbers (2, 3, 5, 7)

        n = 1; 
        0, 2, 4, 6, 8 = 5 total 

        n = 2; 
        idx 0: 0, 2, 4, 6, 8 (return good number STRINGS so 0 at front is ok)
        idx 1: 2, 3, 5, 7

        n = 3
        idx 0: 0, 2, 4, 6, 8 
        idx 1: 2, 3, 5, 7
        idx 2: 0, 2, 4, 6, 8

        n = 4
        idx 0: 0, 2, 4, 6, 8 
        idx 1: 2, 3, 5, 7
        idx 2: 0, 2, 4, 6, 8
        idx 3: 2, 3, 5, 7
    */
    const mod = 1e9 + 7;
    let evenIdxs = Math.ceil(n / 2);
    let oddIdxs = n - evenIdxs;
    let total = modPow(5, evenIdxs) * modPow(4, oddIdxs);
    return Number(total % BigInt(mod));
};

function modPow(base, exp) {
     // 1) Our accumulator, start at 1 (as a BigInt)
    let result = 1n;

    // 2) Convert all inputs into BigInts so every operation is exact
    base  = BigInt(base);
    exp   = BigInt(exp);
    mod   = BigInt(1e9 + 7);

    // 3) While there are still bits set in `exp`...
    while (exp > 0n) {
        // 4) If exp is odd (lowest bit = 1), multiply result by base
        //    (exp % 2n gives either 0n or 1n)
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }

        // 5) Square the base for the next bit
        base = (base * base) % mod;

        // 6) “Shift” exp right by one bit by dividing by 2
        //    (BigInt division is integer division here)
        exp = exp / 2n;
    }

    // 7) When exp hits 0, result holds base^originalExp % mod
    return result;
}