/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    let visited = {};
    let assigned = {};
    let adjList = new Array(n + 1).fill(0).map(zero => []);
    dislikes.forEach(pair => {
        adjList[pair[0]].push(pair[1]);
        adjList[pair[1]].push(pair[0]);
    });
    const DFS = (node) => {
        if (visited[node]) return true;
        const color = new Set([1,2]);
        adjList[node].forEach(person => {
            if (assigned[person] === 1) color.delete(1);
            if (assigned[person] === 2) color.delete(2);
        });
        if (color.size === 0) return false;
        assigned[node] = Math.min(...color);
        visited[node] = true;
        adjList[node].forEach(person => {
            if (!DFS(person)) return false;
        });
        return true;
    }
    for (let i = 1; i < adjList.length; i++) {
        if (!DFS(i)) return false;
    }
    return true;

};