/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let stack = [];
    let node = head;
    while (node) {
        stack.push(node);
        node = node.next;
    }
    node = head;
    let i = 0;
    while (stack.length) {
        if (i % 2 === 0) {
            node.next = stack.shift();
        } else {
            node.next = stack.pop();
        }
        node = node.next;
        i += 1;
    }
    node.next = null;
};