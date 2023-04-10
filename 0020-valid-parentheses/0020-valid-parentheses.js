/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // input parenthesis () [] {} 
    // output: boolean on whether given string is a valid parenthesis 
    // constraints: time? space? 
    // edge: 
        // given anything besides parenthesis? numbers or letters? 
        // will the given string ever be empty? 
    
    //strategy 
    // everytime we see an opening parenthesis ( [ {, the next clossing parenthesis has to be a matching closing parenthesis (stack)
    // ( -> )  "()[]" "([{}])"
    // keep track of most recent opening parenthesis (top of stack)
    // once we reach a clossing parenthesis, check if they're a match 
    // map out closing parenthesis matching opening bracket 
    // if not we return false 
    // if they are we continue 
    // once we comfirm that all parenthesis have a matching partner 
        // (checking if stack is empty)
    // we can return true 
    
    let stack = [];
    let map = {
        '(': true,
        '[': true,
        '{': true,
        '}': '{',
        ']': '[',
        ')': '(',
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === true) {
            stack.push(s[i]);
        } else {
            let openingBracket = stack.pop();
            if (map[s[i]] !== openingBracket) return false;
        }
    }
    return stack.length ? false : true;
};