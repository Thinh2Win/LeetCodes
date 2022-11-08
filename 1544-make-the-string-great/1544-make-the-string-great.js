/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [''];
    for (let i = 0; i < s.length; i++) {
        let top = stack.at(-1);
        if (s[i].toLowerCase() === top.toLowerCase() && top !== s[i]) {
            stack.pop()
        } else {
         stack.push(s[i]);   
        }
    }
    return stack.join('')
};