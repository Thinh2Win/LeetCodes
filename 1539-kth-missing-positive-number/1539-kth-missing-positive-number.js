/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    if (arr[0] !== 1) {
        let missing = arr[0] - 1;
        if (missing >= k) {
            return k;
        } else {
            k -= missing;
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let missing = arr[i + 1] - arr[i] - 1;
        if (missing >= k) {
            return arr[i] + k;
        } else {
            k -= missing;
        }
    }
    return arr.at(-1) + k; 
};