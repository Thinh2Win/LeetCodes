/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let str = [];
    let n = 0; 
    while (n < s.length) {
        let num = '';
        while(!isNaN(s[n])) {
            num += s[n];
            n += 1;
        }
        str.push(num);
        s[n] && str.push(s[n]);
        n += 1;
    }
    if (!isNaN(str)) return str;
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '*' && str[i] !== '/') {
            stack.push(str[i]);
        } else {
            let n1 = stack.pop();
            let n2 = str[i + 1];
            let num;
            if (str[i] === '/') num = Math.trunc(+n1 / +n2);
            if (str[i] === '*') num = +n1 * +n2;
            stack.push(num);
            i += 1;
        }
    }
    let answer = +stack[0];
    for (let i = 1; i < stack.length; i++) {
        if (stack[i] === '+') {
            answer += +stack[i + 1];
            i += 1;
        } else if (stack[i] === '-') {
            answer -= +stack[i + 1];
            i += 1;
        }
    }
    return answer;
};