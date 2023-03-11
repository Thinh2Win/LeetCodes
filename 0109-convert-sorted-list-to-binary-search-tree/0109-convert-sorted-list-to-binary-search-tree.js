/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let vals = [];
    let curr = head;
    while (curr) {
        vals.push(curr.val);
        curr = curr.next;
    };
    const recurse = (arr) => {
        if (!arr.length) {
            return null;
        }
        if (arr.length === 1) {
            return new TreeNode(arr[0]);
        }
        let mp = Math.floor(arr.length / 2);
        let left = arr.slice(0, mp);
        let right = arr.slice(mp+1);
        let root = new TreeNode(arr[mp]);
        root.left = recurse(left);
        root.right = recurse(right);
        return root;
    }
    return recurse(vals);
};