/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length; 
    let provinces = n;

    const parents = new Array(n).fill(0).map((_, idx) => idx);

    function union (n1, n2) {
        const p1 = find(n1);
        const p2 = find(n2);
        if (p1 !== p2) {
            parents[p2] = p1; 
            provinces -= 1;
        }
    };

    function find(n1) {
        if (parents[n1] === n1) return n1;
        parents[n1] = find(parents[n1]);
        return parents[n1];
    }

    for (let n1 = 0; n1 < isConnected.length; n1++) {
        for (let n2 = 0; n2 < isConnected.length; n2++) {   
            const connection = isConnected[n1][n2] === 1;
            if (connection) union(n1, n2);
        }
    }

    return provinces;
};