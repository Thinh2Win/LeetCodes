/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
    // input nxm grid containing 1's and 0's 
    // output: number of distinct islands, an island is distinct if the connecting ones are surrounded by water 
    // connecting ones are considered connected are directly above, down, left, or right, not diagonal 
    // constraints: time? space? 
    // edge: are the 1's and 0's guarenteed to be numbers or strings and not a mix? 
    // - empty grid return 0? 

    // DFS 
    // traverse graph
    // if we encounter a 1, DFS from coordinates
    // keep a map of squares we visited to avoid duplicate work 
    // once done traversing we can add to a counter 

    const shapes = new Set();

    const dfs = (row, col, dir, path) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] !== 1) return;
        grid[row][col] = 0;
        path.push(dir);
        dfs(row + 1, col, 'D', path);
        dfs(row - 1, col, 'U', path);
        dfs(row, col + 1, 'R', path);
        dfs(row, col - 1, 'L', path);
        path.push('B');
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                const path = [];
                dfs(row, col, 'S', path);
                shapes.add(path.join(''));
            }
        }
    }

    return shapes.size;
};

