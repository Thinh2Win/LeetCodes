/**
 * @param {string} s
 * @return {number}
 */
   var numerals = {
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}

var romanToInt = function(s) {
    let total = 0;
    let i = 0;
    while (i < s.length) {
        if (numerals[s[i]] < numerals[s[i + 1]]) {
            total += numerals[s[i + 1]] - numerals[s[i]];
            i += 2;
        } else {
            total += numerals[s[i]];
            i += 1;
        }
    }
    return total;
};