/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
var multiply = function(mat1, mat2) {
    const m = mat1.length;
  const p = mat1[0].length;
  const n = mat2[0].length;

  // 1) Pre-collect nonzeros of each row of mat1:
  //    rowsA[i] = [ [k, mat1[i][k]], ... ] for all mat1[i][k] !== 0
  const rowsA = Array.from({length: m}, () => []);
  for (let i = 0; i < m; i++) {
    for (let k = 0; k < p; k++) {
      const v = mat1[i][k];
      if (v !== 0) rowsA[i].push([k, v]);
    }
  }

  // 2) Pre-collect nonzeros of each row of mat2:
  //    rowsB[k] = [ [j, mat2[k][j]], ... ] for all mat2[k][j] !== 0
  const rowsB = Array.from({length: p}, () => []);
  for (let k = 0; k < p; k++) {
    for (let j = 0; j < n; j++) {
      const v = mat2[k][j];
      if (v !== 0) rowsB[k].push([j, v]);
    }
  }
  // 3) Allocate result matrix C (m×n) filled with zeros
  const C = Array.from({length: m}, () => Array(n).fill(0));

  // 4) Multiply only nonzero pairs
  for (let i = 0; i < m; i++) {
    for (let [k, aVal] of rowsA[i]) {
      // for each nonzero in row i of A, walk B's row k
      for (let [j, bVal] of rowsB[k]) {
        C[i][j] += aVal * bVal;
      }
    }
  }

  return C;
};