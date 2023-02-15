/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];
    s.split('').forEach(letter => {
       if (letter === '#') {
           stack1.pop();
       } else {
           stack1.push(letter);
       }
    });
      t.split('').forEach(letter => {
       if (letter === '#') {
           stack2.pop();
       } else {
           stack2.push(letter);
       }
    });
    return stack1.join('') === stack2.join('');
};