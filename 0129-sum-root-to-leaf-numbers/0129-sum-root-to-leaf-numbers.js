/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    const DFS = (node, string, sum) => {
        if (!node.left && !node.right) {
            string += node.val;
            sum += +string;
            return sum;
        }
        let sumLeft = node.left && DFS(node.left, string + node.val, sum);
        let sumRight = node.right && DFS(node.right, string + node.val, sum);
        return sumLeft + sumRight;
    };
    return DFS(root, '', 0);
};