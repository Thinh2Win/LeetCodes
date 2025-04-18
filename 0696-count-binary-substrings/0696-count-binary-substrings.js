/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    /*
        00001111 total = 4
        000111
        0011
        01

        as we loop through s 
        we keep track of 
            - current number 
            - current number of 0's 
            - current number of 1's 
        so when we reach a number thats not our current, we have alternated 
            so we add the min of current 1's or 0's to our answer count 
            reset opposite count 
    */  
    let answer = 0;
    let curr = s[0];
    let currCount = 0;
    let i = 0;
    while (i < s.length) {
        let num = s[i];
        if (num !== curr) {
            let numCount = 1;
            let j = i;
            while (s[j] === s[j + 1]) {
                j += 1;
                numCount += 1;
            }
            answer += Math.min(currCount, numCount);
            currCount = numCount
            curr = s[j];
            i = j;
        } else {
            currCount += 1;
        }
        i += 1;
    }
    return answer;
};