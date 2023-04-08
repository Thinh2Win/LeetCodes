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
    let merged = new ListNode(0);
    let link = merged;
    let l1 = list1;
    let l2 = list2;
    while (l1 || l2) {
        let val1 = l1?.val ?? Infinity;
        let val2 = l2?.val ?? Infinity;
        if (val1 < val2) {
            link.next = l1;
            l1 = l1.next;
            link = link.next;
        } else {
            link.next = l2;
            l2 = l2.next;
            link = link.next;
        }
    }
    return merged.next;
};