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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const DFS = (currentNode, container) => {
        if (currentNode.left && container.length !== k) {
            DFS(currentNode.left, container);
        }
        container.length !== k && container.push(currentNode.val);
        if (currentNode.right && container.length !== k) {
            DFS(currentNode.right, container);
        }
        return container;
    }
    return DFS(root, []).at(-1);
};