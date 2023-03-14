/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let answer = [];
    let rStart = 0;
    let rEnd = matrix.length - 1;
    let cStart = 0; 
    let cEnd = matrix[0].length - 1;
    while (rStart <= rEnd && cStart <= cEnd) {
            for (let i = cStart; i <= cEnd; i++) {
                answer.push(matrix[rStart][i]);
            }
            for (let i = rStart + 1; i <= rEnd; i++) {
                answer.push(matrix[i][cEnd]);
            }
            for (let i = cEnd - 1; i >= cStart; i--) {
                if (rEnd > rStart) {
                    answer.push(matrix[rEnd][i]);    
                }
            }
            for (let i = rEnd - 1; i > rStart; i--) {
                if (cEnd > cStart) {
                    answer.push(matrix[i][cStart]);   
                }
            }
        rStart += 1;
        rEnd -= 1;
        cStart += 1;
        cEnd -= 1;
    }
    return answer;
};