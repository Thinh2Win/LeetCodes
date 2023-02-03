/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let direction = 'down';
    let idx = 0;
    let container = new Array(numRows).fill(0).map(zero => []);
    for (let i = 0; i < s.length; i++) {
        if (direction === 'down') {
            container[idx].push(s[i]);
            idx += 1;
            if (idx === numRows) {
                direction = 'up';
                idx -= 2;
            }
        } else if (direction === 'up') {
            container[idx].push(s[i]);
            idx -= 1;
            if (idx === -1) {
                direction = 'down';
                idx += 2;
            }
        }
    }
    return container.flat().join('');
};