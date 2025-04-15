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

    while (nums.length > 1) {
        let L = 0;
        let R = nums.length;
        let mp = Math.floor((R - L) / 2 + L);
        let dupeIdx = null;

        if (nums[mp] === nums[mp + 1]) {
            dupeIdx = mp + 1;
        } else if (nums[mp] === nums[mp - 1]) {
            dupeIdx = mp - 1;
        } else {
            // no dupes 
            return nums[mp];
        }

        let left = nums.slice(0, mp > dupeIdx ? dupeIdx : mp);
        let right = nums.slice((mp > dupeIdx ? mp : dupeIdx) + 1, nums.length);
        nums = left.length % 2 === 1 ? left : right;
    }
    return nums[0];
};