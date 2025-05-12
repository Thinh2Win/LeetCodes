/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const answer = [];
    for (let i = 100; i <= 998; i += 2) {
        if (canBuild(i, digits)) answer.push(i);
    }
    return answer;
};

function canBuild(num, digits) {
    let map = {};
    digits.forEach(num => map[num] = (map[num] || 0) + 1 );
    let string = `${num}`
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!map[char]) return false;
        map[char] -= 1;
        if (map[char] < 0) return false;
    }
    return true;
}