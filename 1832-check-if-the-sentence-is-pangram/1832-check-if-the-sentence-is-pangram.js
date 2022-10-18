/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map = {};
    sentence.split('').forEach(letter => map[letter] = 1);
    return Object.keys(map).length === 26 ? true : false;
};