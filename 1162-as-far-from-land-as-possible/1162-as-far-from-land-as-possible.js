/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let land = [];
    let water = [];
    for(let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) land.push([row, col]);
            if (grid[row][col] === 0) water.push([row, col]);
        }
    };
    if (land.length === 0 || water.length === 0) return -1;
    let max = -Infinity;
    water.forEach(coordinate => {
       let [x1, y1] = coordinate;
        let distances = [];
        for (let i = 0; i < land.length; i++) {
            let [x2, y2] = land[i];
            distances.push(Math.abs(x2 - x1) + Math.abs(y2 - y1));
        }
        max = Math.max(max, Math.min(...distances));
    });
    return max;
};