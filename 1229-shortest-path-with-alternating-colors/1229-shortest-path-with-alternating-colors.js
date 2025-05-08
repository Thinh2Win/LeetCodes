/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
    /*
        dijkstras 

        min priority queue to track shortest path [currentNode, path length, color]
            start with node 0 in queue 
        adj list to hold connections ex. 
            [
                [[1, 'R']] shows that node 0 is connected to 1 by a red path 
            ] 
        dp array to keep track of min distances, make sure to track both colors 
            we only push a node into our queue if 
                - the current path length is less than dp length 
                - the color is the opposite color 
                - remember to set dp to new length if everything good  
    */
    const adjList = Array.from({length: n}, () => []);
    const dp = Array.from({length: n}, () => [Infinity, Infinity]); // [redCount, blueCount]
    dp[0] = [0, 0];

    redEdges.forEach(([a, b]) => {
        adjList[a].push([b, 0]);
    });
    blueEdges.forEach(([u, v]) => {
        adjList[u].push([v, 1]);
    });

    const minQ = new MinPriorityQueue(tuple => tuple[1]); // [curr node, curr length, curr color]
    minQ.enqueue([0, 0, '']);

    while (minQ.size()) {
        
        const [node, length, color] = minQ.dequeue();
        let edges = adjList[node];
        for (let [v, nextColor] of edges) {
            if (length + 1 < dp[v][nextColor] && nextColor !== color) {
                minQ.enqueue([v, length + 1, nextColor]);
                dp[v][nextColor] = length + 1;
            }
        }
    }

    return dp.map(([redCount, blueCount]) =>{
         let count = Math.min(redCount, blueCount);
         if (count === Infinity) count = -1;
         return count
        });
};

