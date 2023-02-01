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
    let total = [];
    let idx = 0;
    let node1 = l1;
    let node2 = l2;
    while (node1 !== null || node2 !== null) {
        if (total[idx] === undefined) total[idx] = 0;
        let num1 = node1 === null ? 0 : +node1.val;
        let num2 = node2 === null ? 0 : +node2.val;
        let sum = num1 + num2 + total[idx];
        if (sum > 9) {
            let [d1, d2] = `${sum}`.split('');
            total[idx] = +d2;
            total[idx + 1] = +d1;
        } else {
            total[idx] = sum;
        }
        node1 = node1 && node1.next;
        node2 = node2 && node2.next;
        idx += 1;
    }
    let head = new ListNode(`${total[0]}`);
    let curr = head;
    for (let i = 1; i < total.length; i++) {
        curr.next = new ListNode(`${total[i]}`);
        curr = curr.next;
    }
    return head;
};