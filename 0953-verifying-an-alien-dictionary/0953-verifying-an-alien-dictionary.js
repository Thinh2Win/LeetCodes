/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
     let map = {};
  order.split('').forEach((letter, idx) => map[letter] = idx);
  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1];
    let curr = words[i];
    let shorterWord = prev.length < curr.length ? prev : curr;
    for (let j = 0; j < shorterWord.length; j++) {
      if (map[prev[j]] < map[curr[j]] || curr === prev) break;
      if (map[prev[j]] > map[curr[j]]) return false;
      if (shorterWord === curr && j === shorterWord.length - 1) return false;
    }
  }
  return true;
};