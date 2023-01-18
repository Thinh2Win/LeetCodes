/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var getIndex = function(reader) {
    let L = 0;
    let R = reader.length() - 1;
    while (L < R) {
        var mp = L + Math.floor((R - L) / 2); 
        let isOdd = (R - L + 1) % 2 === 1;
        let res = isOdd ? reader.compareSub(L, mp, mp, R) : reader.compareSub(L, mp, mp + 1, R);
        if ( res === 1) {
            // left sum is > right sum from mp 
            R = mp;
        } else if (res === -1) {
            // right sum > left sum
            L = mp + 1;
        } else {
            // leftsum = right sum 
            return mp;
        }
    }
    return L;
}