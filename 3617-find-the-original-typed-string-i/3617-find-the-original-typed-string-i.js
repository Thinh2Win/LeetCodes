/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count = 1;
    for (let i = 1; i < word.length; i++) {
        let char = word[i];
        if (char === word[i - 1]) count += 1;
    }

    return count;
};