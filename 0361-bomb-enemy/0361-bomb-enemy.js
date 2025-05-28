/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function(grid) {
        // DFS 
    let answer = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '0') {
                answer = Math.max(answer, DFS(grid, [row, col]));
            }
        }
    }
    return answer;
};

function DFS (grid, coordinates) {
    const directions = [[0,1], [0,-1], [1,0], [-1, 0]];
    let count = 0;
    const [row, col] = coordinates;
    const isValid = (newRow, newCol) => newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length;

    for (let [x, y] of directions) {
        let newRow = row;
        let newCol = col;
        
        while (isValid(newRow, newCol) && grid?.[newRow]?.[newCol] !== 'W') {
            if (grid[newRow][newCol] === 'E') count += 1;
            newRow += x;
            newCol += y;
        }
    }
    return count;
}