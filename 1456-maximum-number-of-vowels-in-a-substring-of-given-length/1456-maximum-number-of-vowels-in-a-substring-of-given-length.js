/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 const map = {
        a: 1,
        e: 1,
        i: 1, 
        o: 1, 
        u: 1
};

var maxVowels = function(s, k) {
    // sliding window 
    let vowels = 0;
    let answer = 0;
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        let window = R - L + 1;
        if (window > k) {
            if (map[s[L]]) vowels -= 1;
            L += 1;
        }
        if (map[s[R]]) vowels += 1;
        answer = Math.max(answer, vowels);
    }
    return answer;
    // create L and R pointer
    // when window size exceeds k shrink window
    // keep track of vowels inside of window 
    // set answer to max vowel 
};