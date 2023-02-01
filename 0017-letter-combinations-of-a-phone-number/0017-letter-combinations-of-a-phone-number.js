/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    let answer = [];
    const recurse = (idx, string) => {
        if (idx === digits.length) {
            answer.push(string);
            return;
        }
        let letters = map[digits[idx]];
        letters.split('').forEach(letter => {
           recurse(idx + 1, string + letter); 
        });
    }
    recurse(0, '');
    return answer;
};