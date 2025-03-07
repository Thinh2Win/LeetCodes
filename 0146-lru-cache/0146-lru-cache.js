/**
 * @param {number} capacity
 */
 function ListNode(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}

var LRUCache = function(capacity) {
  this.max = capacity;
  this.map = new Map();
  // Create dummy head and tail nodes for easier manipulation.
  this.head = new ListNode(null, null);
  this.tail = new ListNode(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype._removeNode = function(node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};
LRUCache.prototype._addNodeToTail = function(node) {
  // Always add new node right before the dummy tail.
  node.prev = this.tail.prev;
  node.next = this.tail;
  this.tail.prev.next = node;
  this.tail.prev = node;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) return -1;
  const node = this.map.get(key);
  // Move node to tail (most recently used)
  this._removeNode(node);
  this._addNodeToTail(node);
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    // Update existing node and move it to tail.
    const existingNode = this.map.get(key);
    existingNode.val = value;
    this._removeNode(existingNode);
    this._addNodeToTail(existingNode);
  } else {
    const newNode = new ListNode(key, value);
    this._addNodeToTail(newNode);
    this.map.set(key, newNode);
    // Evict if needed.
    if (this.map.size > this.max) {
      // Remove the node right after the dummy head.
      const lru = this.head.next;
      this._removeNode(lru);
      this.map.delete(lru.key);
    }
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */