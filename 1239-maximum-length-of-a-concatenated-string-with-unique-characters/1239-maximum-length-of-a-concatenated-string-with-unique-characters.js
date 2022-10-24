/**
 * @param {string[]} arr
 * @return {number}
 */
const isUnique = (str1, str2) => {
    let map = {};
    str1.split('').forEach(letter => map[letter] = 1);
    for (let i = 0; i < str2.length; i++) {
        if (map[str2[i]]) {
            return false;
        }
    }
    return true;
}
const noDupes = (string) => {
    let map = {};
  for (let i = 0; i < string.length; i++) {
      if (!map[string[i]]) {
          map[string[i]] = 1;
      } else {
          return false;
      }
  }  
    return true;
};

var maxLength = function(arr) {
    let longest = -Infinity; 
    let memo = {};
    const DFS = (idx, concatString) => {
        if (idx === arr.length) {
            longest = Math.max(concatString.length, longest);
            return;
        }
        let key = `${idx},${concatString}`
        if (key in memo) return;
        DFS(idx + 1, concatString);
        if (isUnique(concatString, arr[idx]) && noDupes(arr[idx])) {
            DFS(idx + 1, concatString += arr[idx]);
        }
        memo[key] = true;
    }
    DFS(0, '');
    return longest;
};