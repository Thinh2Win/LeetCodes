/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    /*
        create adjList 
        loop through adjList and brute force the nodes of each city pair
    */

    const adjList = Array.from({length: n}, () => new Set());
    for (let [u, v] of roads) {
        adjList[u].add(v);
        adjList[v].add(u);
    }
    let max = 0;

    for (let i = 0; i < adjList.length - 1; i++) {
        let r1 = adjList[i];
        for (let j = i + 1; j < adjList.length; j++) {
            let r2 = adjList[j];
            let sum = r1.size + r2.size;
            if (r1.has(j) && r2.has(i)) sum -= 1;
            max = Math.max(max, sum)
        }
    }
    return max;
};