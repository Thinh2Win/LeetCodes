/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    let prev = slow;
    let i = n;
    while (i > 0) {
        fast = fast.next;
        i -= 1;
    }
    while (fast) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    };
    if (slow === head) {
        slow = slow.next;
        return slow;
    }
    prev.next = prev.next.next;
    return head;
};