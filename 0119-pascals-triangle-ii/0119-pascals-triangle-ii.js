/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let currIdx = 0;
    let currRow = [1];
    while (currIdx < rowIndex) {
        const container = [1];
        for (let i = 0; i < currRow.length - 1; i++) {
            container.push(currRow[i] + currRow[i+1])
        }
        container.push(1);
        currIdx += 1;
        currRow = container;
    }
    return currRow;
};