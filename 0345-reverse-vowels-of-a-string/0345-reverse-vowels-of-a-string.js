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
    // iterate forward and put vowels in a stack
    let stack = [];
    let split = s.split('');
    split.forEach(letter => {
        if (isVowel(letter)) {
            stack.push(letter);
        }
    });
    // iterate forward, and if the letter is a vowel 
    // we replace it with a letter from our stack
    for (let i = 0; i < split.length; i++) {
        if (isVowel(split[i])) {
            let vowel = stack.pop();
            split[i] = vowel;
        }
    }
    return split.join('');
    // have a map to check if the letter is a vowel 
};