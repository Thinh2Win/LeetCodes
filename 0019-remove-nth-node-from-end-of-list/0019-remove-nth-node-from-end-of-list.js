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
    // slow and fast pointers 
    let slow = head;
    let fast = head;
    while (n > 0) {
        fast = fast.next; 
        n -= 1;
    };
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    if (slow === head) {
        head = head.next;
        return head;
    }
    let terminator = head;
    while (terminator.next !== slow) {
        terminator = terminator.next;
    }
    terminator.next = terminator.next.next;
    return head;
};