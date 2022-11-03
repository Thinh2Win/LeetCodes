/**
 * @param {string[]} words
 * @return {number}
 */
const isDouble = (string) => {
    return string[0] === string[1];
}

var longestPalindrome = function(words) {
    let counter = 0;
    let doubleMap = {};
    let reverseMap = {};
    for (let i = 0; i < words.length; i++) {
        let reversed = words[i].split('').reverse().join('');
        if (isDouble(words[i])) {
            doubleMap[words[i]] ? doubleMap[words[i]] += 1 : doubleMap[words[i]] = 1;
        } else {
            if (reverseMap[words[i]] === undefined) {
                reverseMap[reversed] ? reverseMap[reversed] += 1 : reverseMap[reversed] = 1;   
            } else {
                counter += 4; 
                reverseMap[words[i]] -= 1;
                if (reverseMap[words[i]] === 0) {
                    delete reverseMap[words[i]];                       
                }
            }
        }
    }
    let doubles = Object.values(doubleMap);
    if (doubles.length === 0) {
        return counter;
    } else if (doubles.length === 1) {
        return counter += 2 * doubles[0];
    } 
    // more than 1 
    doubles.sort((a, b) => b - a);
    let addedOdd = false;
    for (let j = 0; j < doubles.length; j++) {
        if (doubles[j] % 2 === 1 && !addedOdd) {
            counter += 2 * doubles[j];
            addedOdd = true;
        } else if (doubles[j] % 2 === 0) {
            counter += 2 * doubles[j];
        } else if (doubles[j] % 2 === 1 && doubles[j] > 1) {
            counter += (doubles[j] - 1) * 2;
        }
    }
    return counter;
};