/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    /*
        sliding window
        count valid subarrays with extraleft variable
        idea is to shrink the window as long as the the condition is satisfied 
        i.e subarray distinct elements = total array distinct elements 
        we can find distinct elements using a set and checking its length 
        as we shrink the window we increment extra left by 1 and at it to subarray count 
        ex. [1,3,1,2,2]
            3 distinct integers for total array  
            when window becomes 
            [1,3,1,2] it is valid since it has 3 distinct integers 
            [3,1,2] shrink window, extraLeft = 1; still valid so we shrink again
            [1,2] extraLeft = 2, answer += extraLeft = , keep iterating 
            [1,2,2] answer += extraLeft = 4 which is correct 
            why can we do this? because extraLeft accounts for all subarrays before 
                i.e [1,3,1,2] and [3,1,2] 
                so when we introduce the last 2 we know there were 2 other subarrays that were valid 
                and adding the last 2 will also be valid 
                i.e [1,3,1,2,2] and [3,1,2,2]
    */
    let subarrays = 0;
    let L = 0;
    let extraLeft = 0;
    let set = new Set(nums);
    let distinctNums = set.size;
    let count = {};
    let windowNums = 0;

    for (let R = 0; R < nums.length; R++) {
        let num = nums[R];
        if (!count[num]) {
            count[num] = (count[num] || 0) + 1;
            windowNums += 1;
        } else {
            count[num] += 1;
        }
        while (windowNums >= distinctNums) {
            extraLeft += 1;
            let numL = nums[L];
            count[numL] -= 1;
            if (count[numL] === 0) {
                windowNums -= 1;
            }
            L += 1;
        }
        subarrays += extraLeft;
    }
    return subarrays;
};