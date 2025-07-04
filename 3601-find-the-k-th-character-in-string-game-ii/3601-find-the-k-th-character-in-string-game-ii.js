/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    /*
        - we know the string increases by double for each operation 
        - so if we work backwards, if k = 10 
        - need 4 operations and our string will be 16 long 
        - since we only need up to the 10th character we see that the string before was 8
            - "aabbaabbbbccbbcc"
            - "aabbaabb"
        - 10 - 8 = 2 meaning the 10th character is dependant on the 2nd 
        - 
    */
    let shift = 0;
    let lengths = [];
    let len = 1;

    for (let op of operations) {
        len *= 2;
        lengths.push(len);
        if (lengths.length >= k) break;
    }

    for (let i = lengths.length - 1; i >= 0; i--) {
        let half = lengths[i] / 2;
        if (k > half) {
            k -= half;
            if (operations[i] === 1) shift += 1;
        }
    }

    const baseCodeA = 97;
    return String.fromCharCode((shift % 26) + baseCodeA);
};