/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
      const outgoing = [...Array(n)].map(_ => new Set());
    const incoming = [...Array(n)].map(_ => new Set());
    
    for (let [u,v] of connections) {
        outgoing[u].add(v);
        incoming[v].add(u);
    }
    
    let cnt = 0;
    function dft(node, caller=null) {
        
        // remove caller
        outgoing[node].delete(caller); 
        incoming[node].delete(caller);
        
        // incr count by number of outgoing connections
        cnt += outgoing[node].size; 
        
        // recurse on incoming and outgoing neighbors
        for (let inc of incoming[node]) dft(inc, node);
        for (let out of outgoing[node]) dft(out, node);
    }
    
    dft(0);
    return cnt;
};