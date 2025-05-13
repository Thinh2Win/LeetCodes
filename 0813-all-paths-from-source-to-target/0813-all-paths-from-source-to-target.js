/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    // DFS
    // have an answer array  
    // dfs through each node and its neighbor
    // need to track node and have a container 
    // push curr node into container 
    // since graph is acyclic we will always reach end node 
    // once we reach end node we can push container copy into answer array 

    const answer = [];

    const DFS = (node, container) => {
        container.push(node);
        let neighbors = graph[node];
        for (let neighbor of neighbors) {
            DFS(neighbor, [...container]);
        }
        
        if (node === graph.length - 1) answer.push(container);
    }

    DFS(0, []);
    return answer;
};