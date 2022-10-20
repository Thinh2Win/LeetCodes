/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    let counter = 0;
    let bInQueue = [];
    let bInRows = new Array(picture.length).fill(0);
    let bInCols = new Array(picture[0].length).fill(0);
    for (let row = 0; row < picture.length; row++) {
        for (let col = 0; col < picture[0].length; col++) {
            if (picture[row][col] === 'B') {
                bInRows[row] += 1;
                bInCols[col] += 1;
                bInQueue.push([row,col]);
            }
        }
    }
    while (bInQueue.length) {
        let [row, col] = bInQueue.pop();
        if (bInRows[row] === 1 && bInCols[col] === 1) {
            counter += 1;
        }
    }
    return counter;
};