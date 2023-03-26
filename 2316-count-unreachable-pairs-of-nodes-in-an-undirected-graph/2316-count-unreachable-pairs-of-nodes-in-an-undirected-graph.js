/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
    let groups = [];
    let adjList = new Array(n).fill(0).map(zero => []);
    edges.forEach(edge => {
        adjList[edge[0]].push(edge[1]);
        adjList[edge[1]].push(edge[0])
    });
    let visited = new Set();
    const DFS = (idx, count) => {
        if (visited.has(idx)) return;
        visited.add(idx);
        for (let j = 0; j < adjList[idx].length; j++) {
            let next = adjList[idx][j];
            if (visited.has(next)) continue;
            count = DFS(next, count + 1);
        }
        return count;
    };
    for (let i = 0; i < adjList.length; i++) {
        if (visited.has(i)) continue;
        groups.push(DFS(i, 1));
    };
    if (groups.length === 1) return 0;
    let answer = 0;
    let sum = groups.reduce((a,b) => a + b, 0);
    for (let k = 0; k < groups.length - 1; k++) {
        answer += groups[k] * (sum -= groups[k]);
    }
    return answer;
};