/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function(n, edges, s, marked) {
    // dijkstras algo 
    // create an adj list
    const adjList = Array.from({length: n}, () => []);
    for (let [u, v, time] of edges) {
        adjList[u].push([v, time]);
    }
    // create distance dp array 
    const distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    distance[s] = 0;
    // create min queue
    let minQ = new MinPriorityQueue((obj) => obj.currentTime); 
    // initialize min queue with start node 
    minQ.enqueue({node: s, currentTime: 0});
    // while loop running as long as theres stuff in minqueue 
    while (minQ.size()) {
        // dequeue to grab node and current time 
        let {node, currentTime} = minQ.dequeue();
        // loop through neighbors of node using adj list
        let neighbors = adjList[node];
        for (let [neighbor, time] of neighbors) {
        // if the time to traverse to neighbor + current time < total min time (distance[neighbor])
            let total = currentTime + time;
            if (total < distance[neighbor]) {
        // set total min time to new time 
                distance[neighbor] = total;
        // add neighbor and new time to queue
                minQ.enqueue({node: neighbor, currentTime: total});
            }
        }
    }
    // after loop ends, distance dp will have min distance from start node to other nodes 
    // loop through marked and check min distance of marked, if all are still infinity we know its impossible to travel to the marked nodes and to return -1 
    const answer = Math.min(...marked.map(node => distance[node]));
    return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
};