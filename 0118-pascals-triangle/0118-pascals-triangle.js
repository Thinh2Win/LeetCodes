/**
 * @param {number} numRows
 * @return {number[][]}
 */
const rows = {
    1: [1],
}
var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    let container = [[1]]
    let i = 2;
    while (i <= numRows) {
        let prev = rows[i - 1];
        let curr = [1];
        for (let j = 0; j < prev.length - 1; j++) {
            curr.push(prev[j] + prev[j + 1]);
        }
        curr.push(1);
        rows[i] = curr;
        container.push(curr);
        i += 1;
    }
    return container;
};