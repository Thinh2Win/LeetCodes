/**
 * @param {number} n
 * @return {string}
 */
let map = {
    1: '1',
    2: '11',
    3: '21'
}
var countAndSay = function(n) {
    if (map[n]) return map[n];
    let i = 3;
    while (i < n) {
        let string = '';
        let curr = map[i];
        let idx = 0;
        let count = 1;
        while (idx < curr.length) {
            if (curr[idx + 1] === curr[idx]) {
                count += 1;
            } else {
                string += `${count}${curr[idx]}`;
                count = 1;
            }
            idx += 1;
        }
        map[i + 1] = string;
        i += 1;
    }
    return map[n];
};