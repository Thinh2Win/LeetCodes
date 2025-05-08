/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    /*
        Kahns algo 
        need adjList that holds node: [nodes that point to node]
        need a count array to keep count of nodes pointing to node 
        need a queue to hold terminal nodes 

        idea is to pop from our queue and decrement the count of all nodes pointing 
        to current node 
        if the count goes to 0 we push the node into the queue  
        any nodes that aren't 0 for a cycle and are therefore not a safe node 
    */
    const answer = [];
    const adjList = Array.from({length: graph.length}, () => []);
    const count = new Array(graph.length).fill(0);
    const queue = [];

    for (let node = 0; node < graph.length; node++) {
        let neighbors = graph[node];
        if (!neighbors.length) queue.push(node), answer.push(node); // starting nodes 
        neighbors.forEach(neighbor => {
            // want the neighbors to contain node since directed 
            adjList[neighbor].push(node);
            // want to keep track of how many nodes current node directs to 
            count[node] += 1;
        });
    }

    while (queue.length) {
        let node = queue.pop();
        let neighbors = adjList[node];
        neighbors.forEach(neighbor => {
            count[neighbor] -= 1;
            if (count[neighbor] === 0) queue.push(neighbor), answer.push(neighbor);
        });
    }
    return answer.sort((a, b) => a - b);
};