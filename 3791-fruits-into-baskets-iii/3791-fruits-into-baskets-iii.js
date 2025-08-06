/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    /*
        Segment Tree 
        - baskets = leaf nodes 
        - build tree from leaf nodes where the parent determines the max of its children 
        - so when we traverse the tree we can see if the node contains a basket that can hold current fruit 
        - caveats 
            - to use an array to represent a segment tree
            - need to find number of nodes for our tree = N*2 where N is the number of leaf nodes needed 
            - so if we had 7 baskets, we would need 8 nodes
            - total nodes needed for our tree would be 8 * 2 = 16
            - so our array would be of length 16
        Plan
        - build tree of length N * 2
        - loop through fruits 
        - if fruit is greater than root max, no basket can hold this fruit increase count
        - else we traverse the tree by going left (i * 2) or right (i * 2 + 1)
        - so if the fruit is greater than the left max we go left
        - else go right
        - once we reach a basket we mark the basket as 0 as used 
        - then we bubble up the tree and update the max of the parents 
            - to bubble up we would take floor of idx / 2 or short hand in js is >> 1 
        - return count
    */
    let n = baskets.length;
    let N = 1;
    while (N < n) N *= 2;
    const segTree = new Array(N * 2).fill(0);

    // fill in leaf nodes with baskets
    for (let i = 0; i < n; i++) {   
        segTree[N + i] = baskets[i];
    }

    // fill in parent nodes, segtree always start at idx 1
    for (let i = N - 1; i > 0; i--) {
        segTree[i] = Math.max(segTree[i * 2], segTree[i * 2 + 1]); // parent keeps track of the max of its left or right child
    }
    // traverse the segtree for each fruit 
    let count = 0;
    fruits.forEach(fruit => {
        let idx = 1;
        if (fruit > segTree[idx]) return count += 1;
        while (idx < N) { // while we havent reached a basket
            if (fruit <= segTree[idx * 2]) idx *= 2
            else idx = idx * 2 + 1
        }
        // bubble up 
        segTree[idx] = -1;
        while (idx !== 1) {
            idx >>= 1 // equivalent of idx = Math.floor(idx / 2)
            segTree[idx] = Math.max(segTree[idx * 2], segTree[idx * 2 + 1]); // update parent node children
        }
    })
    return count;
};