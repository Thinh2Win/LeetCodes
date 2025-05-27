/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  /*
    2 loops 
    1st loop maps words and their freq 
    2nd loop 
        - loops through keys of maps 
        - checks if reversed key in map exists 
        - if so add freq of key * freq of reversed key to a count 
  */  

    const freq = {};
    for (let word of words) {
        freq[word] = (freq[word] || 0) + 1;
    };

    let answer = 0;
    let usedDouble = false;
    
    for (let word in freq) {
        // if word has same characters
        if (word[0] === word[1]) {
            // if freq of word is odd
            if (freq[word] % 2 === 1) {
                if (!usedDouble) answer += freq[word] * 2, usedDouble = true;
                else answer += (freq[word] - 1) * 2;
            } else {
                // freq is even 
                answer += freq[word] * 2
            }
            continue
        }
        let reverse = `${word[1]}${word[0]}`;
        let count = freq[reverse] || 0;
        answer += (Math.min(count, freq[word]) * 2);
    }

    return answer;
};