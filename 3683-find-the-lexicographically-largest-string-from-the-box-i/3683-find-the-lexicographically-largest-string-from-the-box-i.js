/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    // sliding window 
    /*
        window length = word.length - numFriends + 1
        track largest string 
        use a loop with sliding window 
        get curr word by adding max length to i and slicing the word
            check if the string within the window > current string 
            if so set curr string to window string
        return current string 
    */
    if (numFriends == 1) return word;
    const maxLength = word.length - numFriends + 1;
    let answer = '';
    for (let L = 0; L < word.length; L++) {
       let curr = word.slice(L, L + maxLength);
       if (curr > answer) answer = curr;
    }
    return answer;
};