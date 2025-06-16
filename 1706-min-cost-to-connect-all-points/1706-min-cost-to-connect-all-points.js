/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    /*
        Union Find
        correspond each point in points array with its idx i.e [0, 0] is node 0 
        find all possible edges and include cost i.e. [0, 1, 4] point 0,0 to point 2,2 costs 4 
        sort the edges by ascending costs
        keep track of visited nodes
        keep track of total cost 
        loop while the visited nodes is not equal to total nodes 
        once all nodes are connected return total 
    */
    if (points.length <= 1) return 0;
    const parents = new Array(points.length).fill(0).map((_, idx) => idx);
    let connections = 0;

    const find = (node) => {
        if (node !== parents[node]) {
            parents[node] = find(parents[node]);
        }
        return parents[node];
    }

    const union = (n1, n2) => {
        let p1 = find(n1);
        let p2 = find(n2);

        if (p1 !== p2) {
            parents[p1] = p2;
            connections += 1;
        }
    }

    let total = 0;
    const visited = new Set();
    const edges = [];
    
    for (let i = 0; i < points.length - 1; i++) {
        let p1 = points[i];
        for (let j = i + 1; j < points.length; j++) {
            let p2 = points[j];
            let cost = calcDist(p1, p2);
            edges.push([i, j, cost]);
        }
    }
    edges.sort((a, b) => a[2] - b[2]);
    for (let [u, v, cost] of edges) {
        if (connections === points.length - 1) break
        let p1 = find(u);
        let p2 = find(v);

        if (p1 !== p2) {
            union(u, v);
            total += cost;
        }
    }
    return total;
};

function calcDist(p1, p2) {
    let [x1, y1] = p1;
    let [x2, y2] = p2;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}