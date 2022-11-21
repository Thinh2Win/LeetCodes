/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

var nearestExit = function(maze, entrance) {
    let q = findExits(maze, entrance);
    let steps = 0;
    let memo = {};
    while (q.length) {
        let wave = q.length;
        for (let i = 0; i < wave; i++) {
            let node = q.shift();
            let key = `${node}`;
            if (key in memo) {
                continue;
            }
            memo[key] = true;
            if (isEntrance(entrance, node)) {
                return steps;
            }
            let [row, col] = node;
            maze[row][col] = '+';
            // check up 
            if (row - 1 >= 0 && maze[row - 1][col] === '.') {
                q.push([row - 1, col]);
            }
            // check right 
            if (col + 1 < maze[row].length && maze[row][col + 1] === '.') {
                q.push([row, col + 1]);
            }
            // check down 
            if (row + 1 < maze.length && maze[row + 1][col] === '.') {
                q.push([row + 1, col]);
            }
            // check left 
            if (col - 1 >= 0 && maze[row][col - 1] === '.') {
                q.push([row, col - 1]);
            }
        }
        steps += 1;
    }
    return -1;
};

const isEntrance = (entrance, coordinate) => {
    return `${entrance}` === `${coordinate}`;
}

const findExits = (maze, entrance) => {
    let exits = new Set();
    // check first and last row 
    for (let col = 0; col < maze[0].length; col++) {
            if (maze[0][col] === '.' && !isEntrance(entrance, [0, col])) {
                exits.add([0, col]);
            }
            if (maze[maze.length - 1][col] === '.' && !isEntrance(entrance, [maze.length - 1, col])) {
                exits.add([maze.length - 1, col]);
            }
        }
    // check first and last col
    for (let row = 0; row < maze.length; row++) {
            let last = maze[row].length - 1;
            if (maze[row][last] === '.' && !isEntrance(entrance, [row, last])) {
                exits.add([row, last]);
            }
            let first = 0;
            if (maze[row][first] === '.' && !isEntrance(entrance, [row, first])) {
                exits.add([row, first]);
            }
        }
    return [...exits];
}
