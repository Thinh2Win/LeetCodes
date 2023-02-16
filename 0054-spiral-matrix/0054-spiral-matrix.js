/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let answer = [];
    let fc = 0;
    let lc = matrix[0].length - 1;
    let fr = 0;
    let lr = matrix.length - 1;
    while (fc <= lc && fr <= lr) {
        for (let i = fc; i <= lc; i++) {
            answer.push(matrix[fr][i]);
        }
        fr += 1;
        // last col
        for (let j = fr; j <= lr; j++) {
            answer.push(matrix[j][lc]);
        }
        lc -= 1;
        // last row
        if (fr <= lr) {
            for (let k = lc; k >= fc; k--) {
                answer.push(matrix[lr][k]);
            }
            lr -= 1;
        }
        // first col
        if (fc <= lc) {
            for (let l = lr; l >= fr; l--) {
                answer.push(matrix[l][fc]);
            };
            fc += 1;
        }
    }
    return answer;
};