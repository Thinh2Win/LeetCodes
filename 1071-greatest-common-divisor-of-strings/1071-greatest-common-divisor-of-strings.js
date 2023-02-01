/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let shortest, longest;
    if (str1.length > str2.length) {
        longest = str1;
        shortest = str2;
    } else {
        longest = str2;
        shortest = str1;
    }
    let answer = '';
    for (let i = 0; i < shortest.length; i++) {
        let segment = shortest.slice(0, i + 1);
        let flatten1 = str1.split(segment).join('').length === 0;
        let flatten2 = str2.split(segment).join('').length === 0; 
        if (flatten1 && flatten2) {
            answer = segment;
        }
    }
    return answer;
};