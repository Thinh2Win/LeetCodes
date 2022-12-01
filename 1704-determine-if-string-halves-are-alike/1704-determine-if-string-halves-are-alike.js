/**
 * @param {string} s
 * @return {boolean}
 */
const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  A: true,
  E: true,
  I: true,
  O: true,
  U: true
}
var halvesAreAlike = function(s) {
    let half1 = 0;
    let half2 = 0;
    let mp = s.length / 2;
    for (let i = 0; i < s.length; i++) {
        if (i >= mp && vowels[s[i]]) {
            half2 += 1;
        }
        if (i < mp && vowels[s[i]]) {
            half1 += 1;
        }
    }
    
    return half2 === half1;
};