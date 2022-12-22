/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    if (n === 1) return [0];
    if (n === 2) return [1,1];
    let adjList = new Array(n).fill(0).map(zero => []);
    edges.forEach(edge => {
        adjList[edge[0]].push(edge[1]);
        adjList[edge[1]].push(edge[0]);
    });
    let root = 0;
    let map = {};
    let dp = new Array(n).fill(0);
    let rootTotal = 0;
    const DFS = (node, parent, depth) => {
        rootTotal += depth;
        if (adjList[node].length === 0) {
            map[node] = 1;
            return 1;
        }
        let totalNodes = 1;
        adjList[node].forEach(child => {
            if (child !== parent) {
                totalNodes += DFS(child,node, depth + 1);    
            }
        });
        map[node] = totalNodes;
        return totalNodes;
    }
    DFS(root, -1, 0);
    dp[root] = rootTotal;
    const findDistance = (node, parent, pTotal) => {
        let distance = pTotal + (n - map[node]) - map[node];
        dp[node] = distance;
        adjList[node].forEach(child => {
            if (child !== parent) {
                findDistance(child, node, distance);      
            }
        });
    }
    adjList[root].forEach(child => {
        if (child !== root) {
            findDistance(child, root, rootTotal);      
        }
    });
    return dp;
};