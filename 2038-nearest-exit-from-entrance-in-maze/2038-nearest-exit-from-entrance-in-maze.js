/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    
    const minQ = new MinPriorityQueue(arr => arr[1]); // [[row, col], turns]
    minQ.enqueue([entrance, 0]);
    maze[entrance[0]][entrance[1]] = '+';
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    while (minQ.size()) {
        let [[row, col], turns] = minQ.dequeue();
        if (foundExit(maze, row, col, entrance)) return turns;
        directions.forEach(([x, y]) => {
            let newRow = row + x;
            let newCol = col + y;
            if (maze?.[newRow]?.[newCol] === '.') {
                maze[newRow][newCol] = '+';
                minQ.enqueue([[newRow, newCol], turns + 1]);
            }
        })
    }
    return -1;
};

function foundExit(maze, row, col, entrance) {
    if (row === entrance[0] && col === entrance[1]) return false;
    if (row === 0 || row === maze.length - 1) return true;
    if (col === 0 || col === maze[0].length - 1) return true;
    return false;
}