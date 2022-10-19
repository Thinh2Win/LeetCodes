/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = {};
    words.forEach(word => map[word] ? map[word] += 1 : map[word] = 1);
    let mostFrequent = Object.keys(map).sort((a, b) => {
        if (map[b] === map[a]) {
            return a.localeCompare(b);
        } else {
            return map[b] - map[a];
        }
    });
    return mostFrequent.slice(0, k);
}; 
