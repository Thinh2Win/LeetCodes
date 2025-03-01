/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    // map columns where key is the numbers and value is the freq
    // iterate through rows, and add the freq of the same column to a count variable
    let map = new Map();
    for (let col = 0; col < grid[0].length; col++) {
        let numbers = [];
        for(let row = 0; row < grid.length; row++) {
            numbers.push(grid[row][col]);
        }
        let join = numbers.join(',');
        map.set(join, (map.get(join) || 0) + 1)
    }
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        let numbers = [];
        for (let col = 0; col < grid[0].length; col++) {
            numbers.push(grid[row][col]);
        }
        console.log(numbers.join(''))
        count += map.get(numbers.join(',')) || 0;
    }
    return count;
};