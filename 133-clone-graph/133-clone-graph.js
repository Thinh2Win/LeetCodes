/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let map = new Map();
    let start = node;
    if (start === null) {
        return null;
    }
    let q = [start];
    map.set(start, new Node(start.val));
    while ( q.length > 0) {
        let currentNode = q.shift();
        currentNode.neighbors.forEach(neighbor => {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val));
                q.push(neighbor); 
            }
            map.get(currentNode).neighbors.push(map.get(neighbor)); 
        });
    }
    return map.get(start);
};