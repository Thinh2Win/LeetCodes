/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    /*
        constant space, log n time signals binary search 
        since the nums nums is sorted we can pick a midpoint 
        we check the midpoints left and right to see if it is the same 
        if left and right are different we have found our non duplicate 
        else we split the nums by the duplicates 
        the side with an odd length contains the non dupe 
        so we can binary search with the even side 
        ex. [1,1,2,3,3,4,4,8,8]
            mp = idx 4 = 3
            splitting by dupes we get [1,1,2] and [4,4,8,8] 
            as we can see the odd nums contains our non dupe 
    */

    let L = 0;
    let R = nums.length;

    while (L < R) {
        let mp = Math.floor((R - L) / 2 + L);

        if (nums[mp] === nums[mp + 1]) {
            let left = mp - L; 
            let right = R - mp; // would add 1 cause dupe is on right side but we subtract 1 anyway cause 0 idx
            left % 2 === 1 ? R = mp - 1 : L = mp + 2;
        } else if (nums[mp] === nums[mp - 1]) {
            let left = mp - 1 - L; 
            let right = R - mp - 1;
            left % 2 === 1 ? R = mp - 1 : L = mp + 1;
        } else {
            // no dupes 
            return nums[mp];
        }
    }
    return nums[L];
};