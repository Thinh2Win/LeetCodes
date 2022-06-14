/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let q = [];
    for (let row = 0; row < mat.length; row += 1) {
        for (let col = 0; col < mat[0].length; col += 1) {
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
        let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        dir.forEach(([r, c]) => {
            if (row + r >= 0 && row + r < mat.length && col + c >= 0 && col + c < mat[0].length) {
                if(mat[row + r][col + c] === Infinity) {
                    q.push([row + r, col + c, dis + 1]); 
                }
            }
        }); 
            
    }
    return mat;
};