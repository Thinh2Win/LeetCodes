/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let colStart = 0;
    let colEnd = matrix[0].length - 1;
    while (rowStart < rowEnd) {
        let tL = [rowStart, colStart];
        let tR = [rowStart, colEnd];
        let bR = [rowEnd, colEnd];
        let bL = [rowEnd, colStart];
        for (let i = colStart; i < colEnd; i++) {
            [matrix[tL[0]][tL[1]], matrix[bL[0]][bL[1]]] = [matrix[bL[0]][bL[1]], matrix[tL[0]][tL[1]]];
            [matrix[bL[0]][bL[1]], matrix[bR[0]][bR[1]]] = [matrix[bR[0]][bR[1]], matrix[bL[0]][bL[1]]];
            [matrix[bR[0]][bR[1]], matrix[tR[0]][tR[1]]] = [matrix[tR[0]][tR[1]], matrix[bR[0]][bR[1]]];
            tL[1] += 1;
            tR[0] += 1;
            bR[1] -= 1;
            bL[0] -= 1;
        }
        rowStart += 1;
        rowEnd -= 1;
        colStart += 1;
        colEnd -= 1;
    }
    return matrix;
};