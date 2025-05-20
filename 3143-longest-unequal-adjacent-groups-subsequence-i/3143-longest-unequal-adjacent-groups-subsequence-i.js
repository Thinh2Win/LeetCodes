/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const answer = [words[0]];
    let prev = groups[0];

    for (let i = 1; i < words.length; i++) {
        const group = groups[i];
        const word = words[i];

        if (group !== prev) answer.push(word), prev = group;
    }
    
    return answer;
};