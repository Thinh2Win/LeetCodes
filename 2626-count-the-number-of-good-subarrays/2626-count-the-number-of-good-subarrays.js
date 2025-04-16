/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    /*
        find subarrays with at least k pairs 
        notice how multiple of the same num in a subarray count as multiple 
        [1,1,1,1,1,1] has 5 + 4 + 3 + 2 + 1 = 15 pairs
        [1,1,1,1,1] has 10 pairs of 1's 
        [1,1,1,1] 6 pairs 
        [1,1,1] 3 pairs
        [1,1] 1 pair
        # pairs = (total number - 1) + # pairs before 
        ex. to find # of pairs for [1,1,1,1,1,1,1]
            #pairs = 7 - 1 + # pairs of 6 
            #pairs = 6 + 15 = 21  
        so we can create a map to track how many pairs we would have for a given number of duplicates 
            {
                0: 0,
                1: 0,
                2: 1,
                3: 3,
                4: 6...  
            }

        Approach: sliding window 
        keep track of pairs inside window 
        if pairs = k we increment a count for valid subarrays
        if pairs > k we can decrease window and make sure to increment count while decreasing window 
    */
    const pairsMap = {};
    let L = 0;
    const frequency = {};
    let pairs = 0;
    let answer = 0;
    let extraLeft = 0;

    for (let R = 0; R < nums.length; R++) {
        let num = nums[R];
        frequency[num] = (frequency[num] || 0) + 1;
        let count = frequency[num];
        if (count >= 2) {
            pairs += (count - 1); 
        }

        while (pairs >= k) {
            let numL = nums[L];
            if (frequency[numL] >= 2) pairs -= (frequency[numL] - 1);
            frequency[numL] -= 1; 
            extraLeft += 1;
            L += 1;
        }
        answer += extraLeft;
    }
    return answer;
};