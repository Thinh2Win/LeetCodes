/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    /*
        Sliding window + extraLeft to track valid subarrays
        ex. nums = [2,1,4,3,5] k = 10

        decrease window when sum of window * window length > k 
        when we decrease the window we set extraLeft back to 0 since previous subarrays are no longer valid

        2 -> sum = 2, length = 1, 2 < 10  count = 1
        1 -> sum = 3, length = 2, 6 < 10 count = 2
        4 -> sum = 7 length = 3, 21 > 10 count = 2, shrink window 
            sum = 7 - 2 = 5, length = 2, 10 = 10, count = 3
        3 -> sum = 8, length = 3, 24 > 10, count = 3, shrink window
            sum = 7 length = 2, 14 > 10, count = 3, shrink window
            sum = 3 length = 1, 3 < 10, count = 4 
        5 -> sum = 8, length = 2, 16 > 10, count = 4, shrink window 
            sum = 5 length = 1, 5 < 10, count = 5 

    */

    let extraLeft = 0;
    let L = 0;
    let R = 0;
    let count = 0;
    let windowSum = 0;
    for (R = 0; R < nums.length; R++) {
        windowSum += nums[R];
        if (windowSum * (R - L + 1) >= k) {
            while(windowSum * (R - L + 1) >= k) {
                windowSum -= nums[L];
                L += 1;
                extraLeft -= 1;
            }
        }
        extraLeft += 1;
        count += extraLeft; 
    }
    return count;
};