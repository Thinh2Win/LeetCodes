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
    let nums = [];
    const DFS = (node, string) => {
        if (!node.left && !node.right) {
            string += node.val;
            nums.push(string);
            return;
        }
        node.left && DFS(node.left, string + node.val);
        node.right && DFS(node.right, string + node.val);
    };
    DFS(root, '');
    return nums.reduce((a, b) => +a + +b, 0);
};