/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let [shortest, longest] = [str1, str2].sort((a, b) => a.length - b.length);
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