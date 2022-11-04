/**
 * @param {string} s
 * @return {string}
 */

const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
}

const isVowel = (letter) => {
    let check = letter.toLowerCase();
    return vowels[check] || false;
}

var reverseVowels = function(s) {
   // two pointers
    // split string 
    let word = s.split('');
    let L = 0;
    let R = word.length - 1;
    // while loop that runs while left < right 
    while (L < R) {
        if (isVowel(word[L]) && isVowel(word[R])) {
            [word[L], word[R]] = [word[R], word[L]];
            L += 1;
            R -= 1;
        }
        if (!isVowel(word[L])) {
            L += 1;
        }
        if (!isVowel(word[R])) {
            R -= 1;
        }
    }
    return word.join('');
    
};