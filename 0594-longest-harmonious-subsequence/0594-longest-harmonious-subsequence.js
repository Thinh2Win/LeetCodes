/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    /*
        use map to track freq of numbers 
        loop through keys and check the count of 1 above and below the num
        the subsequence is count of original num + count of num above or below 
        track max subsequence and return 
    */

    const freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let answer = 0;
    
    for (let num in freq) {
        let curr = freq[num];
        let above = freq[+num + 1] || 0;
        let below = freq[+num - 1] || 0;
        if (above) answer = Math.max(curr + above, answer);
        if (below) answer = Math.max(curr + below, answer);
    }
    return answer;
};  