/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let pParents = getParents(p, []);
    let qParents = getParents(q, []);
    let qSet = new Set(qParents);
    for (let node of pParents) {
        if (qSet.has(node)) return node;
    }
};

function getParents(node, arr) {
    let curr = node;
    arr.push(node);
    while (curr.parent) {
        curr = curr.parent;
        arr.push(curr);
    }
    return arr;
}