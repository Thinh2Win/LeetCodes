/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    /*
        We want to return an array that contains the max number of connected nodes 
        for a node from tree1 when connecting to a node from tree2 
        given constraint k

        so, essentially we want to connect nodes from tree1 to a node from tree2 
        that has the greatest amount of connecting nodes that are k - 1 away from tree2 node
        we do - 1 because we count the connection between the tree1 node and tree2 node 
        ex. if looking at node 0 of tree1 we see that all nodes in tree1 are at least 2 connections away 
            so all nodes in tree1 are valid (5)
            from tree2, we would see that node0 has the most connecting nodes that are k - 1 away
            tree2: 0->2->3->1 (4) nodes 
            so that is way the output at idx 0 = 9 
            since connecting node0 from tree1 to node0 from tree2 
            will give max connecting nodes for node0 of tree1 when connecting to a node from tree2
    */

    const n = edges1.length + 1;
    const m = edges2.length + 1;
    const adjList1 = Array.from({length: n}, () => []);
    const adjList2 = Array.from({length: m}, () => []);

    edges1.forEach(([a, b]) => {
        adjList1[a].push(b);
        adjList1[b].push(a);
    });
    edges2.forEach(([u, v]) => {
        adjList2[u].push(v);
        adjList2[v].push(u);
    });

    const answer = [];

    const DFS = (node, parent, conn, adjList) => {
        if (conn < 0) return 0;
        const neighbors = adjList[node];
        let count = 1;
        for (let neighbor of neighbors) {
            if (neighbor === parent) continue;
            count += DFS(neighbor, node, conn - 1, adjList);
        }
        return count; 
    }
    // find max connections for tree2
    let max2 = 0;
    for (let node = 0; node < m; node++) {
        max2 = Math.max(max2, DFS(node, -1, k - 1, adjList2));
    }

    for (let node = 0; node < n; node++) {
        answer.push(DFS(node, -1, k, adjList1) + max2);
    }

    return answer;
};
