/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let L = 0;
    let R = matrix[0].length - 1;
    while (L < R) {
        let tL = [L, L];
        let tR = [L, R];
        let bR = [R, R];
        let bL = [R, L];
        for (let i = L; i < R; i++) {
            let temp = matrix[tL[0]][tL[1]];
            matrix[tL[0]][tL[1]] = matrix[bL[0]][bL[1]];
            matrix[bL[0]][bL[1]] = matrix[bR[0]][bR[1]];
            matrix[bR[0]][bR[1]] = matrix[tR[0]][tR[1]];
            matrix[tR[0]][tR[1]] = temp;
            tL[1] += 1;
            tR[0] += 1;
            bR[1] -= 1;
            bL[0] -= 1;
        }
        L += 1;
        R -= 1;
    }
    return matrix;
};