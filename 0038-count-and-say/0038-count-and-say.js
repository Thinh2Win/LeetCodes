/**
 * @param {number} n
 * @return {string}
 */
map = {
    1: "1",
}

var countAndSay = function(n) {
    if (map[n]) return map[n];
    let current = 2;
    while(!map[n]) {
        map[current] = convert(map[current - 1]);
        current += 1;
    }
    return map[n]
};

const convert = (string) => {
    let answer = '';
    for (let i = 0; i < string.length; i++) {
        let counter = 1;
        while (string[i] === string[i + 1]) {
            counter += 1;
            i += 1;
        }
        answer += `${counter}${string[i]}`;
    }
    return answer;
}