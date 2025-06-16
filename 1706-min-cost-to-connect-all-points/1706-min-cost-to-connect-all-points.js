/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let total = 0;
    let minQ = new MinPriorityQueue(a => a[1]);
    minQ.enqueue([0, 0]);
    const visited = new Set();

    while (visited.size < points.length) {
        let [idx1, cost] = minQ.dequeue();
        if (visited.has(idx1)) continue
        visited.add(idx1);
        total += cost;
        for (let j = 0; j < points.length; j++) {
            if (visited.has(j)) continue
            let dist = calcDist(points[idx1], points[j]);
            minQ.enqueue([j, dist])
        }   
    }
    return total;
};

function calcDist(p1, p2) {
    let [x1, y1] = p1;
    let [x2, y2] = p2;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}