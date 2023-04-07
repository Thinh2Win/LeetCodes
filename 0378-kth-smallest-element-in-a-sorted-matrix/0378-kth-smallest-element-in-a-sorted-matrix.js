/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr = matrix.flat();
    arr.sort((a, b) => a - b);
    return arr.at(k - 1);
};