/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            let letters = '';
            while (stack[stack.length - 1] !== '[') {
                let x = stack.pop();
                letters = x + letters;
            }
            stack.pop();
            let num = '';
            while (!isNaN(stack[stack.length - 1])) {
                let y = stack.pop();
                num = y + num;
            }
            let string = new Array(+num).fill(letters).join('');
            if (stack.length && stack[stack.length - 1] !== '[') {
                stack[stack.length - 1] = stack.at(-1) + string;
                while (stack.length >= 2 && isNaN(stack.at(-2)) && stack.at(-2) !== '[') {
                    let s1 = stack.pop();
                    let s2 = stack.pop();
                    stack.push(s2 + s1);
                }
            } else {
                stack.push(string);
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};