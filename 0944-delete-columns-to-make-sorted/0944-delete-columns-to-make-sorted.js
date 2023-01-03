/**
 * @param {string[]} strs
 * @return {number}
 */
let map = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

var minDeletionSize = function(strs) {
    let count = 0;
    for (let i = 0; i < strs[0].length; i++) {
        let string = '';
        for (let j = 0; j < strs.length; j++) {
            string += strs[j][i];
        }
        if (string.split('').sort().join('') !== string) {
            count += 1;
        }
    }
    return count;
};