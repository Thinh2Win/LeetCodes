/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let split = s.split('');
    let map = {};
    let counter = 0;
    split.forEach(character => {
        if (!map[character]) {
            map[character] = 1;
        } else if (map[character] === 1) {
            map[character] += 1;
        }  
        if (map[character] === 2) {
            counter += 2;
            map[character] = 0;
        }
    });
    for (keys in map) {
        if (map[keys] === 1) {
            counter += 1;
            break;
        }
    }
    return counter;
};