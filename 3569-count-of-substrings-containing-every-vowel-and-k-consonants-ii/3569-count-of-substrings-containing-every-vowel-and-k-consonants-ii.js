/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
    let frequencies = [new Array(128).fill(0), new Array(128).fill(0)]; 
    // frequencies[0] shows 1 if vowel and 0 if not
    // frequencies[1] holds count for letter 
    'aeiou'.split('').forEach(vowel => frequencies[0][vowel.charCodeAt(0)] = 1)
    let answer = 0;
    let consonants = 0;
    let vowels = 0;
    let L = 0;
    let extraLeft = 0;

    for (let R = 0; R < word.length; R++) {
        let rChar = word[R].charCodeAt(0);
        // if letter is a vowel, add to map, if cons add increment consonants 
        if (frequencies[0][rChar] === 1) {
            if (++frequencies[1][rChar] === 1) vowels++;
        } else {
            // letter is consonant, if adding it makes count > k, shrink window first to see valid substrings inbetween
            consonants += 1;
        }
        // if consonants > k, shrink window 
        while (consonants > k) {
            let lChar = word[L].charCodeAt(0);
            if (frequencies[0][lChar] === 1) {
            // if letter is even
            // decrease frequency and vowel count
             if (--frequencies[1][lChar] === 0) vowels--;
            } else {
                consonants -= 1;
            }
            L += 1;
            extraLeft = 0;
        }
        // check if window has all vowels and consonants === k, if so increment answer
        while (vowels === 5 && consonants === k && L < R && frequencies[0][word[L].charCodeAt(0)] === 1 && frequencies[1][word[L].charCodeAt(0)] > 1) {
            extraLeft += 1;
            frequencies[1][word[L].charCodeAt(0)] -= 1;
            L += 1;
        }
        if (vowels === 5 && consonants === k) answer += (1 + extraLeft);
    }
    
    return answer;
};
