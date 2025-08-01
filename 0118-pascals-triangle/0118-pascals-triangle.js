/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const rows = [[1]];
    for (let i = 1; i < numRows; i++) {
        let container = [];
        for (let j = 0; j < rows.at(-1).length; j++) {
            if (j === 0) {
                container.push(rows.at(-1)[0])
                continue
            }
            container.push(rows.at(-1)[j] + rows.at(-1)[j - 1]);
        }
        container.push(rows.at(-1).at(-1));
        rows.push(container)
    }
    return rows;
};