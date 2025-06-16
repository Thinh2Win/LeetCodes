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
 * @return {boolean}
 */
var checkEqualTree = function(root) {
    /*
        traverse tree to get total sum
        post order traversal 
            - sum left, right, and curr node 
            - if the diff of total - sum === sum we can split the tree 
    */

    let total = getTotal(root);
    let canSplit = false;
    const DFS = (node) => {
        if (canSplit) return;
        if (!node) return 0;
        let left = DFS(node.left);
        let right = DFS(node.right);
        let sum = node.val + left + right;
        let diff = total - sum;
        if (diff === sum && node !== root) canSplit = true;
        return sum;
    }
    DFS(root);
    return canSplit; 
};

function getTotal(root) {
    if (!root) return 0;
    let left = getTotal(root.left);
    let right = getTotal(root.right);
    return root.val + left + right;
}