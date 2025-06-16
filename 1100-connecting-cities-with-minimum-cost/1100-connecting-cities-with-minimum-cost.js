/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    /*
        Union Find
        - Want to connect nodes with the least cost first
        - sort connections 
        - keep track of total connections needed (N - 1)
        - use union find to connect nodes with least cost 
        - once we make a connection subtract from total connections and add to total cost
        - if by the end we went through all our connections but the total needed is > 0 its not possible 
        - this works since we start with lowest cost connections and only connect using union find if we 
        havent already made a connection
    */
    const parents = new Array(n + 1).fill(0).map((_, idx) => idx);
    let conn = n - 1;
    
    function find(node) {
        if (node !== parents[node]) {
            parents[node] = find(parents[node]);
        }
        return parents[node];
    }
    
    function union(n1, n2) {
        let p1 = find(n1);
        let p2 = find(n2);

        if (p1 !== p2) {
            parents[p1] = p2;
            conn -= 1;
        }
    }
    connections.sort((a, b) => a[2] - b[2]);
    let total = 0;
    for (let [u, v, cost] of connections) {
        let p1 = find(u);
        let p2 = find(v);
        if (p1 !== p2) {
            union(u, v);
            total += cost;
        }
    }

    return conn === 0 ? total : -1;
};