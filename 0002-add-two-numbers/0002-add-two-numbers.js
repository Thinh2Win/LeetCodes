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
    let head;
    let carry = 0;
    if (l1.val + l2.val > 9) {
        carry = 1;
        head = new ListNode(+(`${l1.val + l2.val}`[1]));
    } else {
        head = new ListNode(l1.val + l2.val);
    }
    let curr = head;
    let n1 = l1.next;
    let n2 = l2.next; 
    while (n1 || n2) {
        let sum = (n1?.val || 0) + (n2?.val || 0) + carry;
        if (sum > 9) {
            curr.next = new ListNode(+(`${sum}`[1]));
            carry = 1;
        } else {
            curr.next = new ListNode(sum);
            carry = 0;
        }
        curr = curr.next;
        if (n1) n1 = n1.next;
        if (n2) n2 = n2.next;
    }
    if (carry === 1) {
        curr.next = new ListNode(1);
    }
    return head;
};