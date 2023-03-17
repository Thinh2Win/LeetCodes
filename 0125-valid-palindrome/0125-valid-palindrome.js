/**
 * @param {string} s
 * @return {boolean}
 */
const letters = {
  a: true,
  b: true,
  c: true,
  d: true,
  e: true,
  f: true,
  g: true,
  h: true,
  i: true,
  j: true,
  k: true,
  l: true,
  m: true,
  n: true,
  o: true,
  p: true,
  q: true,
  r: true,
  s: true,
  t: true,
  u: true,
  v: true,
  w: true,
  x: true,
  y: true,
  z: true
}

var isPalindrome = function(s) {
    let string = '';
    s.toLowerCase().split(' ').join('').split('').forEach(letter => {
        if (letters[letter] || !isNaN(letter)) string += letter
    });
    let L = 0;
    let R = string.length - 1;
    while (L < R) {
        if (string[L] !== string[R]) return false;
        L += 1;
        R -= 1;
    }
    return true;
};