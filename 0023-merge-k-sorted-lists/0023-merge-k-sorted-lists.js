/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length || lists.every(list => !list)) return null;
    let head = null;
    let least = [Infinity, null];
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] && lists[i].val < least[0]) {
            least[0] = lists[i].val;
            least[1] = i;   
        }
    };
    head = lists[least[1]];
    lists[least[1]] = lists[least[1]].next;
    let curr = head;
    while (true) {
        let least = [Infinity, null];
        for (let j = 0; j < lists.length; j++) {
             if (lists[j] && lists[j].val < least[0]) {
                least[0] = lists[j].val;
                least[1] = j;   
            };
        };
        if (least[0] === Infinity) break;
        curr.next = lists[least[1]];
        lists[least[1]] = lists[least[1]].next;
        curr = curr.next;
    }
    return head;
};