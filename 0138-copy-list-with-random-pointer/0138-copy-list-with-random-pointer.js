/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let copies = new Map();
    let node = head;
    while (node) {
        copies.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    while (node) {
        copies.get(node).next = copies.get(node.next) || null;
        copies.get(node).random = copies.get(node.random) || null;
        node = node.next;
    }
    return copies.get(head);
};