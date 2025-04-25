/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    /*
        2 stacks
        - 1 stack tracks current letters 
        - 2nd stack tracks freq of letters  
        ex. s = "deeedbbcccbdaa" k = 3
        charStack = [];
        freqStack = [];
        freq = 0;
        idx 0: d 
            charStack = [d]
            freqStack =[];
            freq = 1 
        idx 1: e 
            since the letter changed we reset freq and push into freqStack 
            charStack = [d, e]
            freqStack =[1];
            freq = 0
        idx 2: e
            charStack = [d, e, e]
            freqStack =[1];
            freq = 2
        idx 3: e 
            charStack = [d, e, e, e]
            freqStack =[1];
            freq = 3
            since freq === k; 
                pop from our stack k times 
                freq = freqStack.pop() = 1
        idx 4: d
            charStack = [d, d]
            freqStack = [];
            freq = 2
        idx 5: b
            letter changed so we again push freq into stack and reset 
            charStack = [d, d, b]
            freqStack = [2];
            freq = 1
    */

    const charStack = [];
    const freqStack = [];
    let currFreq = 0;

    for (let char of s) {
        if (!charStack.length || charStack.at(-1) === char) {
            currFreq += 1;
        } else {
            // front of the stack is not curr letter
            freqStack.push(currFreq);
            currFreq = 1;
        }
        charStack.push(char);
        if (currFreq === k) {
            for (let i = 0; i < k; i++) {
                charStack.pop();
            }
            currFreq = freqStack.pop() || 0;
        }
    }
    return charStack.join('');
};