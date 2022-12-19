/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (n === 1) return true
    let found = false;
    let adjList = new Array(n).fill(0).map(zero => new Array());
    edges.forEach(edge => {
        adjList[edge[0]].push(edge[1]);
        adjList[edge[1]].push(edge[0]);
    });
    let seen = {};
    const DFS = (node) => {
        if (node === destination) return found = true;
        if (seen[node]) return;
        seen[node] = true;
        for (let i = 0; i < adjList[node].length; i++) {
            DFS(adjList[node][i]);
        }
    }
    adjList[source].forEach(child => {
        DFS(child);
    });
    return found;

};