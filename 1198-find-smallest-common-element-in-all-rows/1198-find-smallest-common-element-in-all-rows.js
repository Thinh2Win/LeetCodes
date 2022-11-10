/**
 * @param {number[][]} mat
 * @return {number}
 */
var smallestCommonElement = function(mat) {
    let maps = [];
    for (let row = 0; row < mat.length; row++) {
        let map = {};
        for (let i = 0; i < mat[row].length; i++) {
            map[mat[row][i]] = true;
        }
        maps.push(map);
    }
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