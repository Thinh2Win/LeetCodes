/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    let maps = [];
    let max = [-Infinity, null];
    for (let row = 0; row < mat.length; row++) {
        let map = {};
        for (let i = 0; i < mat[row].length; i++) {
            map[mat[row][i]] = true;
            if (i === 0 && mat[row][i] > max[0]) {
                max = [mat[row][i], row];
            }
        }
        maps.push(map);
    }
    console.log(max)
    for (let col = 0; col < mat[0].length; col++) {
        let currentNum = mat[0][col];
        for (var row = 0; row < mat.length; row++) {
            if (maps[row][currentNum] === undefined) {
                break;
            }
        }
        if (row === mat.length) {
            return currentNum;
        } 
    }
    return -1;
};