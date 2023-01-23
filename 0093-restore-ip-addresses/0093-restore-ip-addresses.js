/**
 * @param {string} s
 * @return {string[]}
 */

const hasLeadingZero = (string) => {
    return `${+string}`.length !== string.length;
}

var restoreIpAddresses = function(s) {
    let answer = [];
    let iString = '';
    for (let i = 0; i < 3; i++) {
        iString += s[i];
        if (hasLeadingZero(iString)) break;
        let jString = '';
        for (let j = i + 1; jString.length < 4; j++) {
            jString += s[j];
            if (hasLeadingZero(jString)) continue;
            let kString = '';
            for (let k = j + 1; kString.length < 4; k++) {
                kString += s[k];
                if (hasLeadingZero(kString)) break;
               for (let l = k + 1; l < s.length; l++) {
                    let lString = s.slice(l, s.length);
                   if (hasLeadingZero(lString)) break;
                     if (+iString < 256 && +jString < 256 && kString < 256 && lString < 256) {
                    let ip = `${iString}.${jString}.${kString}.${lString}`;
                    if (ip.length === s.length + 3) {
                     answer.push(ip);   
                    }
                    }
                }
            }
        }
    }
     return answer;
};