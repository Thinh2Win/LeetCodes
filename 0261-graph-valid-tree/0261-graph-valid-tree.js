/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (edges.length + 1 > n) return false;
    const adjList = Array.from({length: n}, () => []);
    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    let visited = new Set();

    const DFS = (node) => {
        if (visited.has(node)) return
        visited.add(node);
        let neighbors = adjList[node];
        for (let n of neighbors) {
            DFS(n);
        }
    }
    DFS(0);
    return visited.size === n;
};