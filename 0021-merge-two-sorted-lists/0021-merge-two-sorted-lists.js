/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1 && list2) return list2;
    if (list1 && !list2) return list1;
    let n1 = list1; 
    let n2 = list2; 
    let head;
    if (n1.val > n2.val) {
        head = new ListNode(n2.val);
        n2 = n2.next;
    } else {
        head = new ListNode(n1.val);
        n1 = n1.next;
    }
    let link = head;
    while (n1 || n2) {
        if (n1 && n2) {
            if (n1.val > n2.val) {
                link.next = new ListNode(n2.val);
                link = link.next;
                n2 = n2.next;
            } else {
                link.next = new ListNode(n1.val);
                link = link.next;
                n1 = n1.next;
            }
        } else if (n1 && !n2) {
            while (n1) {
                link.next = new ListNode(n1.val);
                link = link.next;
                n1 = n1.next;
            }
        } else {
            link.next = new ListNode(n2.val);
            link = link.next;
            n2 = n2.next;
        }
    }
    return head;
};