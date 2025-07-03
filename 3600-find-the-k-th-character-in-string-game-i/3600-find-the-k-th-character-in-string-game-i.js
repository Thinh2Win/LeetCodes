/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    // char code of a is 97
    const string = [97];
    while (string.length < k) {
        string.push(...string.map(num => num + 1));
    }
    
    return String.fromCharCode(string[k - 1]);
};