/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    /*
        create an adjList with weight for original and reversed 
        ex. [
            [[1, 0], [4, 1]],
            [[0, 1]], 
            [], 
            [[0, 0]], 
        ]
        DFS from 0, and add the weights 
    */

    const adjList = Array.from({length: n}, () => []);
    connections.forEach(([u,v]) => {
        adjList[u].push([v, 1]);
        adjList[v].push([u, 0]);
    });
    
    let answer = 0;
    let visited = new Map();

    const DFS = (node) => {
        if (visited.has(node)) return;
        visited.set(node, true);

        let neighbors = adjList[node];
        for (let [neighbor, weight] of neighbors) {
            if (visited.has(neighbor)) continue;
            answer += weight;
            DFS(neighbor);
        }
    }
    DFS(0);
    return answer;
};