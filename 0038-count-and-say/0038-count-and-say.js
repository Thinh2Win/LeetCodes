/**
 * @param {number} n
 * @return {string}
 */
map = {
    1: "1",
    2: "11",
    3: "21",
    4: "1211",
    5: "111221",
    6: "312211",
    7: "13112221",
    8: "1113213211"
}

var countAndSay = function(n) {
    if (map[n]) return map[n];
    let current = 9;
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