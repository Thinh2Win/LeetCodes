/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    // [0, 2, 5, 0], [0, 1]
    // 7 + 2x : 1 + y
    // the side with the greater sum we add 1 for every zero 
    // if the other side has no zeros and is less we return -1 
    // else if the other side has at least 1 zero we can return the other sum 

    let zero1 = 0;
    let zero2 = 0;
    let sum1 = 0;
    let sum2 = 0;
    nums1.forEach(num => {
        sum1 += num;
        if (num === 0) sum1 += 1, zero1 += 1;
    })
    nums2.forEach(num => {
        sum2 += num;
        if (num === 0) sum2 += 1, zero2 += 2;
    })

    if (sum1 === sum2) return sum1;
    else if (sum2 > sum1 && !zero1) return -1;
    else if (sum1 > sum2 && !zero2) return -1;
    return Math.max(sum1, sum2);
};