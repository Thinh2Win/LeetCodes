/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const dp = new Array(n).fill(Infinity);
    dp[src] = 0;

    const adjList = Array.from({length: n}, () => []);
    flights.forEach(([from, to, cost]) => adjList[from].push([to, cost]));

    const minQ = [];
    minQ.push([src, 0, k + 1]);

    while(minQ.length) {
        let [node, currCost, currTrips] = minQ.shift();
        if (node === dst || currTrips === 0 || !adjList[node]) continue;

        let cities = adjList[node];
        cities.forEach(([city, cost]) => {
            let totalCost = cost + currCost; 
            if (dp[city] > totalCost) {
                minQ.push([city, totalCost, currTrips - 1]);
                dp[city] = totalCost;
            };
        });
    }
    
    return dp[dst] !== Infinity ? dp[dst] : -1;
};