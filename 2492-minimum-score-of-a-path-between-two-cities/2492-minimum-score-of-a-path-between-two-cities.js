/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
   let adjList = new Array(n + 1).fill(0).map(zero => []);
    roads.forEach(road => {
       let [v1, v2, distance] = road;
        adjList[v1].push([v2, distance]);
        adjList[v2].push([v1, distance]);
    });
    let seen = new Set();
    let min = Infinity;
    let q = [1];
    seen.add(1);
    while (q.length) {
        let node = q.shift();
        for (const [next, distance] of adjList[node]) {
            min = Math.min(min, distance);
            if (seen.has(next)) continue;
            seen.add(next);
            q.push(next);
        }
    }
    return min;
};