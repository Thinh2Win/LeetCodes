/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    let dp = [];
    let adjList = new Array(n).fill(0).map(zero => zero = []);
    edges.forEach(edge => {
        adjList[edge[0]].push(edge[1]);
        adjList[edge[1]].push(edge[0]);
    });
    let seen = {};
    const DFS = (idx) => {
        seen[idx] = true;
        let map = {};
        for (let j = 0; j < adjList[idx].length; j++) {
            if (seen[adjList[idx][j]]) continue;
            let subTree = DFS(adjList[idx][j]);
            for (keys in subTree) {
                if (map[keys] === undefined) {
                    map[keys] = subTree[keys];
                } else {
                    map[keys] += subTree[keys];
                }
            }
        }
        map[labels[idx]] ? map[labels[idx]] += 1 : map[labels[idx]] = 1;
        dp[idx] = map[labels[idx]]; 
        return map; 
    }
    for (let i = 0; i < adjList.length; i++) {
        if (seen[i]) continue;
        DFS(i);
    }
    return dp;
};