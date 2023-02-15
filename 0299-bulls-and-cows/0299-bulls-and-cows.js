/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    let map1 = {};
    let map2 = {};
    let remainder = secret.split('').filter((num, idx) => {
       if (secret[idx] === guess[idx]) {
           bulls += 1;
       } else {
           map1[secret[idx]] ? map1[secret[idx]] += 1 : map1[secret[idx]] = 1;
           map2[guess[idx]] ? map2[guess[idx]] += 1 : map2[guess[idx]] = 1;
       }
        return num !== guess[idx];
    }).join('');
    for (let i = 0; i < remainder.length; i++) {
        if (map2[remainder[i]] > 0) {
            cows += 1;
            map2[remainder[i]] -= 1;
        }
    }
    return `${bulls}A${cows}B`;
};