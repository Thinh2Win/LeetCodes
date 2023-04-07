/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let answer = [];
    nums1.forEach(num => map[num] ? map[num] += 1 : map[num] = 1);
    nums2.forEach(num => {
       if (map[num]) {
           answer.push(num);
           map[num] -= 1;
       } 
    });
    return answer;
};