/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    if (connections.length < n - 1) return -1;
    // create adjList
    // DFS through adjList
    // keep track of visited computers
    // count number of groups (group is connected computers)
    // number of cables we need to move is # groups - 1
    let adjList = new Array(n).fill(0).map(zero => []);
    connections.forEach(connection => {
        adjList[connection[0]].push(connection[1]);
        adjList[connection[1]].push(connection[0]);
    });
    let visited = {};
    let groups = 0;
    const DFS = (idx) => {
        if (visited[idx]) return;
        visited[idx] = true;
        for (let i = 0; i < adjList[idx].length; i++) {
            if (visited[adjList[idx][i]]) continue;
            DFS(adjList[idx][i]);
        }
        return 1;
    };
    for (let j = 0; j < adjList.length; j++) {
        if (visited[j]) continue;
        groups += DFS(j);
    }
    return groups - 1;
};