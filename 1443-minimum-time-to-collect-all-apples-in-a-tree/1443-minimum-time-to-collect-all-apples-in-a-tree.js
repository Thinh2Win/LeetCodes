/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    if (hasApple.every(apple => apple === false)) return 0;
    let adjList = new Array(n).fill(0).map(zero => []);
    edges.forEach(edge => {
        adjList[edge[0]].push(edge[1]);
        adjList[edge[1]].push(edge[0]);
    });
    let seen = {};
    const DFS = (node) => {
        if (seen[node]) return 0;
        seen[node] = true;
        if (!adjList[node].length) {
            return hasApple[node] === true ? 2 : 0;
        }
        let total = 0;
        for (let i = 0; i < adjList[node].length; i++) {
            if (seen[adjList[node][i]]) continue;
            total += DFS(adjList[node][i]);
        }
        return (total > 0 || hasApple[node]) ? total + 2 : total; 
    }
    let answer = DFS(0);
    return answer - 2;
};