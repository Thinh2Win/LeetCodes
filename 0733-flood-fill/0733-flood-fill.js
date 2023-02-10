/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let seen = new Array(image.length).fill(0).map(zero => new Array(image[0].length).fill(false));
    let og = image[sr][sc];
    let q = [[sr, sc]];
    while (q.length) {
        let node = q.pop();
        let [row, col] = node;
        image[row][col] = color;
        seen[row][col] = true;
        //check up
        if (row - 1 >= 0 && image[row - 1][col] === og && !seen[row - 1][col]) {
            q.push([row - 1, col]);
        }
        // check down
        if (row + 1 < image.length && image[row + 1][col] === og && !seen[row + 1][col]) {
            q.push([row + 1, col]);
        }
        // check left
        if (col - 1 >= 0 && image[row][col - 1] === og && !seen[row][col - 1]) {
            q.push([row, col - 1]);
        }
        // check right
        if (col + 1 < image[0].length && image[row][col + 1] === og && !seen[row][col + 1]) {
            q.push([row, col + 1]);
        }
    }
    return image;
};