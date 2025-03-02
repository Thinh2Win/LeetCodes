/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let answer = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1][0] < nums2[p2][0]) {
            answer.push(nums1[p1]);
            p1 += 1;
        } else if (nums1[p1][0] > nums2[p2][0]) {
            answer.push(nums2[p2]);
            p2 += 1;
        } else {
            answer.push([nums1[p1][0], nums1[p1][1] + nums2[p2][1]]);
            p1 += 1;
            p2 += 1;
        }
    }
    answer.push(...nums1.slice(p1, nums1.length), ...nums2.slice(p2, nums2.length));
    return answer;
};