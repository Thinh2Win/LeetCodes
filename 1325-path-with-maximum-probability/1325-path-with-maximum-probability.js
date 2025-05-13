/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const adjList = Array.from({length: n}, () => []);
    edges.forEach(([u, v], idx) => {
        adjList[u].push([v, succProb[idx]]);
        adjList[v].push([u, succProb[idx]]);
    });

    const dp = new Array(n).fill(0);
    dp[start_node] = Infinity;

    const queue = [[start_node, 1]];
    while (queue.length) {
        let [node, currProb] = queue.shift();
        let neighbors = adjList[node];
        neighbors.forEach(([neighbor, weight]) => {
            let prob = weight * currProb;
            if (dp[neighbor] < prob) {
                dp[neighbor] = prob;
                queue.push([neighbor, prob]);
            }
        })
    }   
    return dp[end_node];
};