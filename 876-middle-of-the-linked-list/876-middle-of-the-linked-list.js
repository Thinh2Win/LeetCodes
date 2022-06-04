/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
     // create an array
  let nodes = [];
  let currentNode = head;
  // traverse using while loop with condition (currentNode exists)
  while (currentNode) {
    // push currentNode.val into array
    nodes.push(currentNode.val);
    currentNode = currentNode.next;
  }
  if (nodes.length % 2 === 0) {
    // if array.length % 2 === 0
    // array.length / 2 = index
    var index = (nodes.length / 2);
  } else {
    // else
    // array.length / 2 + 1 = index
    index = Math.floor((nodes.length / 2));
  }
  // create a counter to keep track of nodes
  let counter = 0;
    let answer = null;
  // traverse using recursion loop with break condition ( counter === index - 1)
  const loop = (node) => {
      
    if (counter === index) {
      // if condition is met, return currentNode
      return answer = node;
    }
    // else add to counter
    counter += 1;
    loop(node.next);
  };
  loop(head);
    return answer;
};