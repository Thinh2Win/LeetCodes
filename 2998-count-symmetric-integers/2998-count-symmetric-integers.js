/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let answer = 0;
    for (let i = low; i <= high; i++) {
        let string = `${i}`;
        if (string.length % 2 === 1) continue;
        let mp = string.length / 2;
        let left = string.slice(0, mp).split('');
        let right = string.slice(mp).split('');
        let leftSum = left.reduce((acc, num) => acc += +num, 0);
        let rightSum = right.reduce((acc, num) => acc += +num, 0);
        if (leftSum === rightSum) answer += 1;
    }
    return answer;
};