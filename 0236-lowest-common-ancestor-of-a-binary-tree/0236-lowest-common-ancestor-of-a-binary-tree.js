/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root;
    // dfs 
    let LCA = null;
    // dfs recursive function will return boolean if the current branch has either p or q
    const DFS = (node) => {
        if (!node) return false
        
        let left = DFS(node.left) || 0;
        let right = DFS(node.right) || 0;
        let mid = (node === p || node === q) ? 1 : 0;

        if (left + mid + right >= 2) LCA = node;
        return (left + mid + right) > 0;
    }
    DFS(root);
    return LCA;

};