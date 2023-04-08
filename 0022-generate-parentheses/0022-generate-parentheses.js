/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // if n = 3
    // we have 3 opening and 3 closing parenthesis 
    // decision tree 
    // we can either start with an opening or closing bracket 
    // but we can only use a closing bracket as long as the number of closing brackets is higher than opening brackets 
    // so we use recursion with a decision tree to decide which path to take 
    // opening vs. closing bracket used 
    // break case is when the number of closing and opening brackets is zero
    // if we reach break case we push our result into an answer array 
    // so recursive function will keep track of 
        // opening and closing parenthesis 
        // and current string formed 
    let answer = [];
    const recurse = (open, closing, string) => {
        if (open === 0 && closing === 0) {
            answer.push(string);
            return;
        }
        if (open > 0) recurse(open - 1, closing, string + '(');
        if (closing > open) recurse(open, closing - 1, string + ')');
    };
    recurse(n, n, '');
    return answer;
};