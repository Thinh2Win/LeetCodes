/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = 1e9 + 7;
    let count = new Array(26).fill(0);

    // Initialize count array from string
    for (let char of s) {
        count[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < t; i++) {
        let next = new Array(26).fill(0);
        for (let j = 0; j < 26; j++) {
            if (j === 25) { // 'z'
                next[0] = (next[0] + count[25]) % MOD; // 'a'
                next[1] = (next[1] + count[25]) % MOD; // 'b'
            } else {
                next[j + 1] = (next[j + 1] + count[j]) % MOD;
            }
        }
        count = next;
    }

    // Total characters after t transformations
    return count.reduce((sum, c) => (sum + c) % MOD, 0);
};