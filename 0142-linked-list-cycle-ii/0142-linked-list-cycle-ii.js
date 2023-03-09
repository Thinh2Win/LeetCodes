/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            if (slow === head) return head;
            let start = head;
            while (start) {
                slow = slow.next;
                start = start.next;
                if (start === slow) {
                    return start;
                }
            }
        }
    }
    return null;
};