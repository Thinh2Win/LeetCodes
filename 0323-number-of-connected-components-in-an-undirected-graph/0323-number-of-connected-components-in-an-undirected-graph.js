/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // 2 approaches: DFS + memo or Union Find 
    const parents = new Array(n).fill(0).map((_, idx) => idx);

    function find(node) {
        if (node === parents[node]) return node;
        let parent = parents[node] === node ? node : find(parents[node]);
        parents[node] = parent;
        return parent;
    }

    function union(n1, n2) {
        let p1 = find(n1);
        let p2 = find(n2);

        if (p1 !== p2) {
            parents[p2] = p1
        };
    }

    for (let [n1, n2] of edges) {
        union(n1, n2);
    }
    
    for (let i = 0; i < n; i++) {
        find(i);
    }

    return new Set(parents).size;
};