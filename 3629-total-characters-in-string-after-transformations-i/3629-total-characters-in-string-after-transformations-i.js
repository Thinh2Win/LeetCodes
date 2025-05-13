/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = 1e9 + 7;
    const count = new Array(26).fill(0);
    let z = 25; 
    let answer = s.length;

    for (const char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    // loop while t is greater than 0
    while (t) {
        // add z count to answer 
        answer = (count[z] + answer) % MOD;
        // since z creates ab, we increment the count of the letter 26 characters away from current 'z'
        count[(z + 1) % 26] = (count[(z + 1) % 26] + count[z]) % MOD;
        // move z in a cyclic order
        z = (z + 25) % 26
        // decrement t 
        t -= 1;
    }

    return answer;
};