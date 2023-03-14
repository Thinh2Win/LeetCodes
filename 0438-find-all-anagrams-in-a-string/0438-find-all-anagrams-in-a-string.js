/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // create a map for letters in p
    // create another map for our window to keep track of letters in window
    // window will be length of p
    // as we iterate through s, we take note of all letters in window 
    // if all letters match, we push current index into answer array 
    let answer = [];
    let pMap = {};
    p.split('').forEach(letter => {
       pMap[letter] ? pMap[letter] += 1 : pMap[letter] = 1; 
    });
    let wMap = {};
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        let wLength = R - L + 1;
        if (wLength > p.length) {
            wMap[s[L]] -= 1;
            L += 1;
        }
        wMap[s[R]] !== undefined ? wMap[s[R]] += 1 : wMap[s[R]] = 1;
        if (Object.keys(pMap).every(key => {
        return pMap[key] === wMap[key]
    })) {
            answer.push(L);
        }
    }
    return answer;
};
