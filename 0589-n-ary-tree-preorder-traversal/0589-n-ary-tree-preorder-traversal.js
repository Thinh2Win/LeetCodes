/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    let order = [];
    const traverse = (node) => {
        order.push(node.val);
        node.children.forEach(child => traverse(child));
    };
    traverse(root);
    return order;
};