/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const dp = Array.from({length: n}, () => new Array(k + 2).fill(Infinity));
    dp[src][k + 1] = 0;

    const adjList = Array.from({length: n}, () => []);
    flights.forEach(([from, to, cost]) => adjList[from].push([to, cost]));

    const minQ = new MinPriorityQueue(duple => duple[1]);
    minQ.enqueue([src, 0, k + 1]);
  
    while(minQ.size()) {
        let [node, currCost, stops] = minQ.dequeue();
        if (node === dst) return currCost;

        let cities = adjList[node];
        cities.forEach(([city, cost]) => {
            let totalCost = cost + currCost; 
            if (dp[city][stops] > totalCost && stops > 0) {
                minQ.enqueue([city, totalCost, stops - 1]);
                dp[city][stops] = totalCost;
            };
        });
    }
    return -1;
};