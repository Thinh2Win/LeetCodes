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
var sumNumbers = function(node, string = '', sum = 0) {
        if (!node.left && !node.right) {
            string += node.val;
            sum += +string;
            return sum;
        }
        let sumLeft = node.left && sumNumbers(node.left, string + node.val, sum);
        let sumRight = node.right && sumNumbers(node.right, string + node.val, sum);
        return sumLeft + sumRight;
};