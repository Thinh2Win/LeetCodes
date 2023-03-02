/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let start = chars[0];
    while (start === chars[1]) {
        chars[0] += chars[1];
        chars.splice(1, 1);
    };
    if (chars[0].length > 1) chars[0] = `${chars[0][0]}${chars[0].length}`;
    while (chars.length > 1) {
        let char = chars[1];
        while (char === chars[2]) {
            chars[1] += chars[2];
            chars.splice(2,1);
        }
        chars[0] += chars[1].length > 1 ? `${chars[1][0]}${chars[1].length}` : chars[1];
        chars.splice(1,1);
    }
    for (let j = 0; j < chars[0].length; j++) {
        chars.push(chars[0][j]);
    }
    chars.shift();
    return chars.length;
};