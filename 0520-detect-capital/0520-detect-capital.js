/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let letters = word.split('');
    let capitals = letters.every(letter => letter === letter.toUpperCase());
    let lower = letters.every(letter => letter === letter.toLowerCase());
    if (capitals || lower) return true;
    let letter = letters.shift();
    if (letter === letter.toUpperCase() && letters.every(letter => letter === letter.toLowerCase())) return true;
    return false;
};

