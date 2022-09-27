/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(string) {
    let answer = [];
    let dominoes = string;
    while (true) {
        let current = [];
        for (let i = 0; i < dominoes.length; i++) {
            if (dominoes[i] === '.' && dominoes[i + 1] === 'L' && dominoes[i - 1] !== 'R') {
               current.push('L');
            } else if (dominoes[i] === '.' && dominoes[i - 1] === 'R' && dominoes[i + 1] !== 'L') {
                current.push('R');
            } else {
                current.push(dominoes[i]);
            }
        }
        if (answer.join('') === current.join('')) {
            break;
        } 
            dominoes = current.join('');
            answer = current;
    }
    return answer.join('');
};