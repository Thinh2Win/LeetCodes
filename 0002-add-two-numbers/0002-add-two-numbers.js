/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node1 = l1;
    let node2 = l2;
    let head = new ListNode(0);
    let link = head;
    let carry = 0;
    while (node1 || node2) {
        let num1 = node1?.val ?? 0;
        let num2 = node2?.val ?? 0;
        let sum = num1 + num2 + carry;
        if (sum > 9) {
            carry = 1;
            link.next = new ListNode(+(`${sum}`[1]));
        } else {
            link.next = new ListNode(sum);
            carry = 0;
        }
        link = link.next;
        node1 && (node1 = node1.next);
        node2 && (node2 = node2.next);
    }
    if (carry === 1) {
        link.next = new ListNode(1);
    }
    return head.next;
};