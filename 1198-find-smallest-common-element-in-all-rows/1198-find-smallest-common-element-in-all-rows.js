/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    let maps = [];
    let max = -Infinity;
    for (let row = 0; row < mat.length; row++) {
        let map = {};
        for (let i = 0; i < mat[row].length; i++) {
            map[mat[row][i]] = true;
            if (i === 0) {
                max = Math.max(max, mat[row][0]);
            }
        }
        maps.push(map);
    }
    for (let col = 0; col < mat[0].length; col++) {
        let currentNum = mat[0][col];
        for (var row = 0; row < mat.length; row++) {
            if (maps[row][currentNum] === undefined) {
                if (mat[row].at(-1) < currentNum) {
                    return -1;
                }
                if (col === mat[0].length - 1) {
                    return -1;
                }
                break;
            }
        }
        if (row === mat.length) {
            return currentNum;
        } 
    }
};