/**
 * @param {string} digits
 * @return {string[]}
 */
const nums = {
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
    if (!digits.length) return [];
    let answer = [];
    const recurse = (idx, str) => {
        if (str.length === digits.length) {
            answer.push(str);
            return;
        }
        let letters = nums[digits[idx]].split('');
        letters.forEach(letter => {
            recurse(idx + 1, str + letter);
        });
    };
    recurse(0, '');
    return answer;
};