/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let q = [];
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] === 0) {
                q.push([row, col, 0]);
            } else {
                mat[row][col] = Infinity; 
            }
        }
    }
    while (q.length) {
        let [row, col, dis] = q.shift();
        if (mat[row][col] > dis) {
            mat[row][col] = dis;
        }
        if (row - 1 >= 0 && mat[row - 1][col] === Infinity) {
            q.push([row - 1, col, dis + 1]);
        }
        if (row + 1 < mat.length && mat[row + 1][col] === Infinity) {
            q.push([row + 1, col, dis + 1]);
        }
        if (col + 1 < mat[row].length && mat[row][col + 1] === Infinity) {
            q.push([row, col + 1, dis + 1]);
        }
        if (col - 1 >= 0 && mat[row][col - 1] === Infinity) {
            q.push([row, col - 1, dis + 1]);
        }
    }
    return mat;
};